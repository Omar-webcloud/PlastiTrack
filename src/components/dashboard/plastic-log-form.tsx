"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Camera, Loader2 } from "lucide-react";
import { useState } from "react";
import { LeafIcon } from "../icons";

const formSchema = z.object({
  type: z.string({ required_error: "Please select a plastic type." }),
  quantity: z.coerce.number().int().positive("Must be a positive number."),
  weight: z.coerce.number().positive("Must be a positive number."),
});

const plasticTypes = [
  "PET (Bottles)",
  "HDPE (Jugs)",
  "PVC (Pipes)",
  "LDPE (Bags)",
  "PP (Containers)",
  "PS (Foam)",
  "Other",
];

export function PlasticLogForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      quantity: 1,
      weight: 0,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);

    toast({
      title: "Collection Logged!",
      description: (
        <div className="flex items-center gap-2">
            <LeafIcon className="text-primary"/>
            <span>You've earned 10 eco points!</span>
        </div>
      ),
    });
    
    form.reset();
  }

  return (
    <div className="w-full max-w-md mx-auto">
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="bg-card p-6 rounded-2xl space-y-6">
            <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
                <FormItem>
                <FormLabel className="text-card-foreground font-bold">Plastic Type</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                    <SelectTrigger className="bg-background rounded-xl h-14 border-none shadow-sm text-base">
                        <SelectValue placeholder="Select plastic type" />
                    </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                    {plasticTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                        {type}
                        </SelectItem>
                    ))}
                    </SelectContent>
                </Select>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
                control={form.control}
                name="quantity"
                render={({ field }) => (
                <FormItem>
                    <FormLabel className="text-card-foreground font-bold">Quantity</FormLabel>
                    <FormControl>
                    <Input type="number" placeholder="" {...field} className="bg-background rounded-xl h-14 border-none shadow-sm text-base" />
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="weight"
                render={({ field }) => (
                <FormItem>
                    <FormLabel className="text-card-foreground font-bold">Weight (kg)</FormLabel>
                    <FormControl>
                    <Input type="number" placeholder="" {...field} className="bg-background rounded-xl h-14 border-none shadow-sm text-.base" />
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )}
            />
            </div>
            
            <Button variant="outline" className="w-full h-24 bg-card border-none flex-col gap-2 text-card-foreground/80 rounded-2xl shadow-sm">
                <Camera className="h-6 w-6" />
                <span>Click to upload proof photo</span>
            </Button>

            <Button type="submit" disabled={isSubmitting} className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full" size="lg">
                {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Submit Log
            </Button>
        </form>
        </Form>
    </div>
  );
}
