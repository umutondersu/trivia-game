import { HTMLAttributes } from "react";
import { cn } from "../lib/utils";

function PageContainer({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: HTMLAttributes<HTMLDivElement>["className"];
}) {
	return (
		<div
			className={cn(
				"flex flex-col h-screen w-screen overflow-clip",
				className
			)}>
			{children}
		</div>
	);
}

export default PageContainer;
