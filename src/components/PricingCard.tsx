import { CheckCircle2, Clock, Gift } from 'lucide-react';
import CTAButton from './CTAButton';

export default function PricingCard({ 
  title, badge, description, features, price, originalPrice, installTime, ctaText, ctaMessage, bonus 
}: any) {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100 flex flex-col relative h-full">
      {badge && (
        <div className="bg-red-600 text-white text-[10px] font-bold py-1 px-3 rounded-full absolute top-4 right-4 uppercase">
          {badge}
        </div>
      )}
      
      <h3 className="text-xl font-black mb-2 text-black mt-4">{title}</h3>
      <p className="text-black text-xs mb-6 italic">{description}</p>

      <ul className="space-y-3 mb-6 flex-grow">
        {features.map((feature: string, i: number) => (
          <li key={i} className="flex items-start gap-2 text-sm text-black">
            <CheckCircle2 size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
            <span className="font-medium">{feature}</span>
          </li>
        ))}
        
        {bonus && (
          <li className="flex items-start gap-2 text-sm font-bold text-black mt-4 p-2 bg-gray-50 rounded-lg border border-dashed border-gray-300">
            <Gift size={18} className="text-red-600 flex-shrink-0" />
            <span>{bonus}</span>
          </li>
        )}
      </ul>

      <div className="mt-auto pt-6 border-t border-gray-100">
        <div className="mb-4">
          {originalPrice && (
            /* Prix barré passé en NOIR avec opacité pour rester lisible */
            <span className="text-black line-through text-xs block mb-1 font-bold">{originalPrice}</span>
          )}
          <span className="text-2xl font-black text-black">{price}</span>
        </div>
        
        {/* Texte d'installation passé en NOIR */}
        <div className="flex items-center gap-1.5 text-[10px] text-black mb-4 italic font-semibold">
          <Clock size={12} />
          <span>Installation : {installTime}</span>
        </div>

        <CTAButton text={ctaText} message={ctaMessage} variant="primary" />
      </div>
    </div>
  );
}
