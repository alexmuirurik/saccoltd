'use client'
import React, { ReactNode } from 'react'
import { CommandItem } from '../ui/command'
import { Check } from 'lucide-react'

const CommandItemSelect = ({
    data,
    selected,
    children,
    onItemSelect,
}: {
    data: any[]
    selected: any
    children: ReactNode
    onItemSelect: (item: any) => void
}) => {
    return data.map((item, index) => (
        <CommandItem
            className={`mb-1 w-full ${item === selected ? 'bg-neutral-100' : ''}`}
            value={item.id}
            key={item.id}
            onSelect={() => onItemSelect(item)}
        >
            <div className={`flex items-center justify-between w-full`}>
                {children}
                <Check
                    className={`
                        ml-auto ${
                            item === selected ? 'opacity-100' : 'opacity-0'
                        }`}
                />
            </div>
        </CommandItem>
    ))
}

export default CommandItemSelect
