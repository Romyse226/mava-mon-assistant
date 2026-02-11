import React from 'react';
import { CheckCircle2, Clock } from 'lucide-react';
import CTAButton from './CTAButton';

// Cette partie dit à l'ordinateur d'accepter title, badge, etc.
export default function PricingCard({ 
  title, badge, description, features, price, originalPrice, installTime, ctaText, ctaMessage 
}: any) {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100 flex flex-col relative">
      {badge && (
        <div className="bg-red-600 text-white text-[10px] font-bold py-1 px-3 rounded-full absolute top-4 right-4 uppercase">
          {badge}
        </div>
      )}
      
      <h3 className="text-xl font-black mb-2 text-gray-900 mt-4">{title}</h3>
      <p className="text-gray-500 text-xs mb-6">{description}</p>

      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((feature: string, i: number) => (
          <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
            <CheckCircle2 size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-6 border-t border-gray-100">
        <div className="mb-4">
          {originalPrice && (
            <span className="text-gray-400 line-through text-xs block">{originalPrice}</span>
          )}
          <span className="text-2xl font-black text-gray-900">{price}</span>
        </div>
        
        <p className="text-[10px] text-gray-400 mb-4 italic">Installation : {installTime}</p>

        <CTAButton text={ctaText} message={ctaMessage} variant="primary" />
      </div>
    </div>
  );
}
