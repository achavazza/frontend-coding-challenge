import React from "react";
import { steps as defaultSteps } from "./steps";

export default function Stepper({ currentStep }: { currentStep: number }) {
	return (
		<ol className="flex items-center w-full relative">
			{defaultSteps.map((step, index) => {
				const isActive = index <= currentStep; // pasos activos hasta currentStep
				const isLast = index === defaultSteps.length - 1;

				return (
					<li key={step.id} className="flex-1 flex flex-col items-center relative">
						{!isLast && (
							<div className={`absolute top-1/2 left-1/2 w-full h-1 transform -translate-y-4 -z-10 
								${index < currentStep ? "bg-blue-600" : "bg-gray-100" }`}>
							</div>
						)}
						<div className={`w-8 h-8 flex items-center justify-center rounded-full 
							${isActive ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-500" }`} >
							{index + 1}
						</div>
						<span className={`mt-2 text-sm font-semibold
							${index <= currentStep ? "text-gray-600" : "text-gray-300" }`}>
							{step.title}
						</span>
					</li>
				);
			})}
		</ol>
	);
}
