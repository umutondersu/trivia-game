import {
  QuizSchema,
  type TFormValues,
  TokenSchema,
  type TQuiz,
} from './definitions';
import { htmlEntitiesToUtf8 } from './utils';

async function fetchToken(): Promise<string> {
  if (sessionStorage.getItem('TOKEN')) {
    return sessionStorage.getItem('TOKEN') as string;
  }
  try {
    const token = await fetch(
      'https://opentdb.com/api_token.php?command=request'
    );
    if (!token.ok) {
      throw new Error('Bad response');
    }
    const rawtoken = TokenSchema.safeParse(await token.json());

    if (!rawtoken.success) {
      throw new Error('response has an invalid format');
    }

    if (rawtoken.data.response_code !== 0) {
      throw new Error('Unable to get token');
    }

    sessionStorage.setItem('TOKEN', rawtoken.data.token);
    return rawtoken.data.token;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    if (error && typeof error === 'object' && 'message' in error) {
      throw new Error((error as { message: string }).message);
    }
    throw new Error('Unknown error');
  }
}
let attempts = 0;
export default async function fetchQuiz(
  QuizFormValues: TFormValues | null
): Promise<TQuiz> {
  if (localStorage.getItem('QUIZ')) {
    return JSON.parse(localStorage.getItem('QUIZ') as string);
  }
  if (!QuizFormValues) {
    throw new Error('No form values');
  }
  const { difficulty, category, numberOfQuestions } = QuizFormValues;
  const token = await fetchToken();

  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    let response: Response;
    if (category === 8) {
      response = await fetch(
        `https://opentdb.com/api.php?amount=${numberOfQuestions}&difficulty=${difficulty}&type=multiple&token=${token}`
      );
    } else {
      response = await fetch(
        `https://opentdb.com/api.php?amount=${numberOfQuestions}&category=${category}&difficulty=${difficulty}&type=multiple&token=${token}`
      );
    }
    const rawdata = QuizSchema.safeParse(await response.json());
    if (!rawdata.success) {
      throw new Error('response has an invalid format');
    }

    const data = rawdata.data;
    switch (data.response_code) {
      case 1:
        throw new Error('There are no more questions in this category.');
      case 2:
        throw new Error('Invalid parameters');
      case 3:
        throw new Error('Token not found');
      case 4:
        throw new Error('Token empty');
      case 5:
        throw new Error('Rate limit exceeded');
    }

    data.results.forEach((result) => {
      result.type = undefined;
      result.difficulty = undefined;
      result.category = undefined;
      result.question = htmlEntitiesToUtf8(result.question);
      result.correct_answer = htmlEntitiesToUtf8(result.correct_answer);
      result.incorrect_answers = result.incorrect_answers.map((answer) =>
        htmlEntitiesToUtf8(answer)
      ) as [string, string, string];
    });
    localStorage.setItem('QUIZ', JSON.stringify(data.results));
    return data.results;
  } catch (error) {
    if (error instanceof Error) {
      if (error.message === 'Rate limit exceeded') {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(fetchQuiz(QuizFormValues));
          }, 5500);
        });
      }
      if (error.message === 'Token empty') {
        attempts++;
        if (attempts > 1) {
          throw new Error('There are no more questions in this category.');
        }
        const sendReset = await fetch(
          `https://opentdb.com/api_token.php?command=reset&token=${token}`
        );
        if (!sendReset.ok) {
          throw new Error('Bad response from reset');
        }
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(fetchQuiz(QuizFormValues));
          }, 5500);
        });
      }
      if (error.message === 'Token not found') {
        sessionStorage.removeItem('TOKEN');
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(fetchQuiz(QuizFormValues));
          }, 5500);
        });
      }
      if (error.message === 'Invalid parameters') {
        throw new Error('Invalid parameters');
      }
      throw new Error(error.message);
    }
    if (error && typeof error === 'object' && 'message' in error) {
      throw new Error((error as { message: string }).message);
    }
    throw new Error('Unknown error');
  }
}
