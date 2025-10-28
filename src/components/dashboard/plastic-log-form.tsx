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
import { DialogClose } from "../ui/dialog";

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
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);

    toast({
      title: "Collection Logged!",
      description: `You've logged ${values.quantity} x ${values.type} (${values.weight} kg).`,
    });
    
    // This would typically be handled by the dialog's state, but for simplicity
    // we can close it programmatically if we had access to the `setOpen` function.
    // For now, let's rely on a manual close or DialogClose button.
    document.querySelector('[data-radix-dialog-content] button[aria-label="Close"]')?.click();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 bg-muted p-6 rounded-2xl">
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Plastic Type</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="bg-background">
                    <SelectValue placeholder="Select a type of plastic" />
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
                <FormLabel>Quantity</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="e.g., 5" {...field} className="bg-background" />
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
                <FormLabel>Weight (kg)</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="e.g., 0.5" {...field} className="bg-background" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        
        <Button variant="outline" className="w-full bg-background/70 border-dashed border-primary/50 text-primary/80">
            <Camera className="mr-2 h-4 w-4" />
            Click to upload your photo
        </Button>

        <Button type="submit" disabled={isSubmitting} className="w-full" size="lg">
            {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Submit Log
        </Button>
      </form>
    </Form>
  );
}
