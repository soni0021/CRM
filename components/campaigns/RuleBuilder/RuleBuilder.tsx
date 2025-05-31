'use client';

import React, { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button'; // Adjust path if necessary
import { PlusCircle } from 'lucide-react';
import RuleRow from './RuleRow'; // Adjust path if necessary

export interface Rule {
  id: string;
  field: string;
  operator: string;
  value: string;
  conjunction: 'AND' | 'OR';
}

let ruleIdCounter = 0;

export default function RuleBuilder() {
  const [rules, setRules] = useState<Rule[]>([]);

  const addRule = useCallback(() => {
    const newRule: Rule = {
      id: `rule-${ruleIdCounter++}`,
      field: 'totalSpend',
      operator: '>',
      value: '',
      conjunction: 'AND', // Default, will be ignored by UI for the first rule
    };
    setRules((prevRules) => [...prevRules, newRule]);
  }, []);

  const updateRule = useCallback((id: string, updates: Partial<Rule>) => {
    setRules((prevRules) =>
      prevRules.map((rule) => (rule.id === id ? { ...rule, ...updates } : rule))
    );
  }, []);

  const removeRule = useCallback((id: string) => {
    setRules((prevRules) => prevRules.filter((rule) => rule.id !== id));
  }, []);

  return (
    <div className="p-4 border rounded-md space-y-3 bg-slate-50">
      {rules.length === 0 && (
        <p className="text-sm text-gray-500 py-4 text-center">
          No audience rules defined yet. Click "Add Condition" to start building your segment.
        </p>
      )}
      {rules.map((rule, index) => (
        <RuleRow
          key={rule.id}
          rule={rule}
          onUpdateRule={updateRule}
          onRemoveRule={removeRule}
          isFirstRule={index === 0}
        />
      ))}
      <div className="pt-2">
        <Button onClick={addRule} variant="outline" size="sm">
          <PlusCircle className="mr-2 h-4 w-4" /> Add Condition
        </Button>
      </div>
    </div>
  );
}
