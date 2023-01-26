import { supabaseClient } from '@/lib/supabaseClient';
import React from 'react';

interface UserCredentials {
  userId: string | null | undefined;
  token: string;
}

interface AddJob {
  userId: string | null | undefined;
  token: string;
  event: React.SyntheticEvent<HTMLFormElement>;
}

export const getJobs = async ({ userId, token }: UserCredentials) => {
  const supabase = await supabaseClient(token);
  const { data: jobs } = await supabase.from('Jobs').select('*').eq('user_id', userId);

  return jobs;
};

export const addJob = async ({ userId, token, event }: AddJob) => {
  const supabase = await supabaseClient(token);
  const { data, error } = await supabase.from('Jobs').insert({
    user_id: userId,
    title: event.target[0].value,
    description: event.target[1].value,
  });

  if (error) {
    console.log(error);
  }

  return data;
};
