'use client';

import React from 'react';
import { Rule } from './RuleBuilder'; // Adjust path if necessary
import { Input } from '@/components/ui/input'; // Adjust path if necessary
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'; // Adjust path if necessary
import { Button } from '@/components/ui/button'; // Adjust path if necessary
import { Trash2 } from 'lucide-react';

interface RuleRowProps {
  rule: Rule;
  onUpdateRule: (id: string, updates: Partial<Rule>) => void;
  onRemoveRule: (id: string) => void;
  isFirstRule: boolean;
}

const fieldOptions = [
  { value: 'totalSpend', label: 'Total Spend' },
  { value: 'visits', label: 'Number of Visits' },
  { value: 'lastSeenDays', label: 'Last Seen (Days Ago)' },
  { value: 'city', label: 'City' },
  { value: 'email', label: 'Email Address' },
];

const operatorOptions: { [key: string]: { value: string; label: string }[] } = {
  totalSpend: [
    { value: '>', label: '>' },
    { value: '<', label: '<' },
    { value: '=', label: '=' },
  ],
  visits: [
    { value: '>', label: '>' },
    { value: '<', label: '<' },
    { value: '=', label: '=' },
  ],
  lastSeenDays: [
    { value: '>', label: '>' },
    { value: '<', label: '<' },
    { value: '=', label: '=' },
  ],
  city: [
    { value: 'is', label: 'Is' },
    { value: 'isNot', label: 'Is Not' },
    { value: 'contains', label: 'Contains' },
  ],
   email: [
    { value: 'contains', label: 'Contains' },
    { value: 'endsWith', label: 'Ends With' },
  ],
};

const conjunctionOptions = [
  { value: 'AND', label: 'AND' },
  { value: 'OR', label: 'OR' },
];

export default function RuleRow({ rule, onUpdateRule, onRemoveRule, isFirstRule }: RuleRowProps) {
  const currentOperators = operatorOptions[rule.field] || operatorOptions['totalSpend'];

  return (
    <div className="flex items-start space-x-2 p-3 border rounded bg-white shadow-sm">
      {!isFirstRule && (
        <Select
          value={rule.conjunction}
          onValueChange={(value) => onUpdateRule(rule.id, { conjunction: value as 'AND' | 'OR' })}
        >
          <SelectTrigger className="w-[80px]">
            <SelectValue placeholder="AND/OR" />
          </SelectTrigger>
          <SelectContent>
            {conjunctionOptions.map((opt) => (
              <SelectItem key={opt.value} value={opt.value}>
                {opt.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      )}
      <div className={isFirstRule ? "flex-grow grid grid-cols-3 gap-2" : "flex-grow grid grid-cols-3 gap-2 ml-[88px]"}>
        <Select
          value={rule.field}
          onValueChange={(value) => onUpdateRule(rule.id, { field: value, operator: operatorOptions[value]?.[0]?.value || '' })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select field" />
          </SelectTrigger>
          <SelectContent>
            {fieldOptions.map((opt) => (
              <SelectItem key={opt.value} value={opt.value}>
                {opt.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select
          value={rule.operator}
          onValueChange={(value) => onUpdateRule(rule.id, { operator: value })}
          disabled={!rule.field}
        >
          <SelectTrigger>
            <SelectValue placeholder="Operator" />
          </SelectTrigger>
          <SelectContent>
            {currentOperators.map((opt) => (
              <SelectItem key={opt.value} value={opt.value}>
                {opt.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Input
          type={rule.field === 'totalSpend' || rule.field === 'visits' || rule.field === 'lastSeenDays' ? 'number' : 'text'}
          value={rule.value}
          onChange={(e) => onUpdateRule(rule.id, { value: e.target.value })}
          placeholder="Value"
          disabled={!rule.operator}
        />
      </div>
      <Button variant="ghost" size="icon" onClick={() => onRemoveRule(rule.id)} className="ml-2 self-center">
        <Trash2 className="h-4 w-4 text-red-500" />
      </Button>
    </div>
  );
}
