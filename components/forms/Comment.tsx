"use client";

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import { Input } from "@/components/ui/input"
import { useForm } from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod'
import * as z from 'zod'
import { usePathname, useRouter } from "next/navigation";
//import { updateUser } from "@/lib/actions/user.actions";
import { CommentValidation } from '@/lib/validations/thread';
import { addCommentToThread, createThread } from "@/lib/actions/thread.actions";
import Image from "next/image";


interface Props {
    threadId: string;
    currentUserImg: string;
    currentUserId: string;
}

const Comment = ({threadId, currentUserImg, currentUserId}: Props) => {

  const onSubmit = async (values: z.infer<typeof CommentValidation>) => {
    await addCommentToThread(
      threadId,
      values.thread,
      JSON.parse(currentUserId),
      pathname
    );

    form.reset();
  }
  
    const router = useRouter();
    const pathname = usePathname();

    const form = useForm({
        resolver: zodResolver(CommentValidation),
        defaultValues: {
            thread: ''
        }
    })

    return (
        <Form {...form}>
          <form
            className='comment-form'
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              control={form.control}
              name='thread'
              render={({ field }) => (
                <FormItem className='flex w-full items-center gap-3'>
                  <FormLabel>
                    {/* <Image
                        src={userInfo.image}
                        alt="Profile Image"
                        width={48}
                        height={48}
                        className="rounded-full object-cover"
                    /> */}
                  </FormLabel>
                  <FormControl className="border-none bg-transparent">
                   <Input
                    type="text"
                    placeholder="Have something to say???... Post your thoughts here... "
                    className="no-focus text-light-1 outline-none"
                    {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <Button type="submit" className="comment-form_btn">
                Reply
            </Button>
          </form>
        </Form>
    )
}

export default Comment;