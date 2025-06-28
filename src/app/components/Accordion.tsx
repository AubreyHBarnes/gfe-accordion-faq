
'use client';
import React, { useState } from 'react';
import sections from '../../data.json';



export default function Accordion() {

    const [openSections, setOpenSections] = useState(
    new Set(),
  );
    
    return (
        <div className='accordion flex flex-col w-full'>
            {sections.map(({ id, title, content}) => {
                const isExpanded = openSections.has(id);
                return (
                    <div className='border-neutral-300 border-b last:border-b-0 accordion-item w-full  gap-8' key={id}>
                        <button
                            className='accordion-header font-semibold text-left w-full h-full py-4 flex items-center justify-between'
                            type='button'
                            onClick={() => {
                                const newOpenSections = new Set(openSections);
                                newOpenSections.has(id)
                                    ? newOpenSections.delete(id)
                                    : newOpenSections.add(id);
                                setOpenSections(newOpenSections);
                            }}>{title}
                            <span className={[
                                'accordion-icon',
                                isExpanded && 'accordion-icon--rotated'
                            ].filter(Boolean).join(' ')} />
                            
                        </button>
                        <div
                            className='accordion-content w-full h-full'
                            hidden={!isExpanded}>
                            {content}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
