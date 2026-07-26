import React from 'react';

interface CategoryFiltersProps {
  selected: string;
  onChange: (category: string) => void;
}

export const CategoryFilters: React.FC<CategoryFiltersProps> = ({ selected, onChange }) => {
  const filters = [
    { label: 'All', value: 'all' },
    { label: 'Curtains', value: 'curtains' },
    { label: 'Blinds', value: 'blinds' },
    { label: 'Wallpaper', value: 'wallpaper' },
    { label: 'Rugs', value: 'rugs' },
    { label: 'Flooring', value: 'flooring' },
    { label: 'Mattresses', value: 'mattresses' },
    { label: 'Soft Furnishings', value: 'soft-furnishings' }
  ];

  return (
    <div 
      style={{ 
        display: 'flex', 
        gap: '0.75rem', 
        justifyContent: 'center', 
        flexWrap: 'wrap',
        marginBottom: '3rem'
      }}
    >
      {filters.map((f) => {
        const active = selected === f.value;
        return (
          <button
            key={f.value}
            onClick={() => onChange(f.value)}
            style={{
              padding: '0.6rem 1.4rem',
              fontSize: '0.85rem',
              fontFamily: 'var(--font-display)',
              fontWeight: 500,
              borderRadius: '20px',
              cursor: 'pointer',
              transition: 'all 0.3s cubic-bezier(0.25, 1, 0.5, 1)',
              backgroundColor: active ? 'var(--cls-charcoal)' : 'var(--cls-pure-white)',
              color: active ? 'var(--cls-pure-white)' : 'var(--cls-text-dark)',
              border: active ? '1px solid var(--cls-charcoal)' : '1px solid var(--cls-border-lux)',
              boxShadow: active ? '0 4px 10px rgba(0, 0, 0, 0.05)' : 'none'
            }}
          >
            {f.label}
          </button>
        );
      })}
    </div>
  );
};

export default CategoryFilters;
