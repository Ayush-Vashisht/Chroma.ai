import { auth } from '@clerk/nextjs';
import React from 'react'
import { redirect } from 'next/navigation';
import { transformationTypes } from '@/constants';
import { getUserById } from '@/lib/actions/user.actions';
import Header from '@/components/shared/Header';
import TransformationForm from '@/components/shared/TransformationForm';
import { SearchParamProps, TransformationTypeKey } from '@/types';

const AddTransformationTypePage = async ({params:{type}}:SearchParamProps) => {
  const {userId} = auth();
  if(!userId)redirect('/sign-in')
  const transformation= transformationTypes[type];
  // const user = await getUserById(userId);

  return (
    <div>
      <Header title={transformation.title} subTitle={transformation.subTitle}/>
      <section>
        <TransformationForm
          action='add'
          userId={user._id}
          type={transformation.type as TransformationTypeKey}
          // creditBalance={user.creditBalance}
        />
      </section>
    </div>
  )
}

export default AddTransformationTypePage