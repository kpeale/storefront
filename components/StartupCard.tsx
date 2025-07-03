import React from 'react';
import { EyeIcon } from 'lucide-react';
import Link from 'next/link';
import { formatDate } from '@/lib/utils';
import Image from 'next/image';
import { Button } from './ui/button';

const StartupCard = ({ post }: { post: StartupTypeCard }) => {
  const {
    _createdAt,
    views,
    author: { id: authorId, name },
    title,
    _id,
    image,
    category,
    description,
  } = post;
  return (
    <li className='startup-card group'>
      <div className='flex-between'>
        <p className='startup_card_date'>{formatDate(_createdAt)}</p>
        <div className='flex gap-1.5'>
          <EyeIcon className='size-6 text-primary' />
          <span className='text-16-medium'>{views}</span>
        </div>
      </div>
      <div className='flex-between mt-5 gap-5'>
        <div className='flex-1'>
          <Link href={`/user/${authorId}`}>
            <p className='text-16-medium line-clamp-1'>{name}</p>
          </Link>
          <Link href={`/startup/${_id}`}>
            <p className='text-26-semibold mt-2 line-clamp-1'>{title}</p>
          </Link>
        </div>
        <Link href={`/user/${authorId}`}>
          <Image
            src='https://placeholder.co/48x48'
            alt='placeholder'
            width={48}
            height={48}
            className='rounded-full'
          />
        </Link>
      </div>
      <Link href={`/startup/${_id}`}>
        <p className='startup-card_desc '>{description}</p>
        <Image
          width={24}
          height={24}
          src={image}
          alt='placeholder'
          className='startup-card_img'
        />
      </Link>
      <div className='flex-between gap-3 mt-5'>
        <Link href={`/?query=${category.toLowerCase()}`}>
          <p className='text-16-medium'>{category}</p>
        </Link>
        <Button
          className='startup-card_btn'
          asChild
        >
          <Link href={`/startup/${_id}`}>Details</Link>
        </Button>
      </div>
    </li>
  );
};

export default StartupCard;
