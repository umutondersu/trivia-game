import { HTMLAttributes } from "react";
import { cn } from "../lib/utils";

export default function PageContainer({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: HTMLAttributes<HTMLDivElement>["className"];
}) {
	return (
		<div
			className={cn(
				"flex h-screen w-screen flex-col overflow-clip",
				className,
			)}>
			{children}
		</div>
	);
}
