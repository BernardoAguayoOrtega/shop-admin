"use client";

import * as React from "react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useStoreModal } from "@/hooks/use-store-modal";
import { Modal } from "../modal";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const formSchema = z.object({
  name: z
    .string()
    .min(1, "Missing Name")
    .min(3, "Name is too short")
    .max(255, "Name is too long"),
});

export const StoreModal = () => {
  const storeModal = useStoreModal();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };

  return (
    <Modal
      title='Create Store'
      description='Create a new store'
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}>
      <div className='space-y-4 py-2 pb-4'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder='E-Commerce' {...field} />
                    </FormControl>
                    <FormMessage>
                      {form.formState.errors.name?.message}
                    </FormMessage>
                  </FormItem>
                );
              }}
            />
            <div className='pt-6 space-x-2 flex items-center justify-end w-full'>
              <Button variant='outline'>Cancel</Button>
              <Button type='submit'>Create</Button>
            </div>
          </form>
        </Form>
      </div>
    </Modal>
  );
};
