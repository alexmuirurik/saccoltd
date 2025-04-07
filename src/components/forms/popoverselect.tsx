'use client'
import React, { ReactNode } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Button } from '../ui/button'
import { Check, ChevronsUpDown } from 'lucide-react'
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from '../ui/command'
import { FormControl } from '../ui/form'
import { ControllerRenderProps } from 'react-hook-form'
import CommandItemSelect from './commanditem'

const PopoverSelect = ({
    field,
    data,
    children,
    selected,
    onItemSelect,
}: {
    field: ControllerRenderProps<any>
    data: any[]
    children: ReactNode
    selected: any
    onItemSelect: (item: any) => void
}) => {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <FormControl className="w-full">
                    <Button
                        variant="outline"
                        role="combobox"
                        className={`w-full justify-between ${
                            !field.value && 'text-muted-foreground'
                        }`}
                    >
                        {children}
                        <ChevronsUpDown className="opacity-50" />
                    </Button>
                </FormControl>
            </PopoverTrigger>
            <PopoverContent className="flex flex-col justify-start w-full p-0">
                <Command className=" self-start ">
                    <CommandInput
                        placeholder="Search Member by ID Number..."
                        className="h-9"
                    />
                    <CommandList>
                        <CommandEmpty>No User found.</CommandEmpty>
                        <CommandGroup>
                            <CommandItemSelect
                                data={data}
                                onItemSelect={onItemSelect}
                                selected={selected}
                            >
                                {children}
                            </CommandItemSelect>
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}

export default PopoverSelect
