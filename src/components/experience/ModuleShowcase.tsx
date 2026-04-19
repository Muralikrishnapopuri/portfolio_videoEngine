"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { RESTOSOFT_MODULES } from "@/data/experience";
import { Check } from "lucide-react";

export function ModuleShowcase() {
  return (
    <Tabs defaultValue="admin" className="w-full !flex-col">
      <TabsList className="!grid grid-cols-2 md:grid-cols-4 !w-full bg-surface border border-crimson/20 !h-auto p-1">
        {RESTOSOFT_MODULES.map((m) => (
          <TabsTrigger
            key={m.id}
            value={m.id}
            className="data-[state=active]:bg-crimson data-[state=active]:text-white font-mono text-xs py-3 !h-auto"
          >
            {m.name}
          </TabsTrigger>
        ))}
      </TabsList>

      {RESTOSOFT_MODULES.map((m) => (
        <TabsContent key={m.id} value={m.id} className="mt-6">
          <div className="bg-surface border border-crimson/10 rounded-lg p-6 md:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <div className="mono-caps text-cobalt-light mb-2">{m.tagline}</div>
                <h3 className="font-display text-3xl mb-4">{m.name}</h3>
                <p className="text-text-body mb-6">{m.description}</p>
                <ul className="space-y-2">
                  {m.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-text-primary">
                      <Check className="h-4 w-4 text-crimson mt-0.5 flex-shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="aspect-video bg-gradient-to-br from-crimson/10 via-surface to-cobalt/10 rounded border border-crimson/10 flex items-center justify-center">
                <span className="font-display text-6xl text-crimson-gradient opacity-40">{m.name}</span>
              </div>
            </div>
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}