import { useCallback } from 'react';

import useUser from '@/hooks/useUser';
import { useRouter } from 'next/router';
import Image from 'next/image';

interface AvatarProps {
  userId: string;
  isLarge?: boolean;
  hasBorder?: boolean;
}

const Avatar: React.FC<AvatarProps> = ({ userId, isLarge, hasBorder }) => {
  const router = useRouter();
  const { data: fetchedUser } = useUser(userId);

  const onClick = useCallback(
    (event: any) => {
      event.stopPropagation();

      const url = `/users/${userId}`;

      router.push(url);
    },
    [router, userId]
  );

  return (
    <div
      className={`rounded-full hover:opacity-90 cursor-pointer transition relative ${
        hasBorder ? 'border-4 border-black' : ''
      } ${isLarge ? 'h-32 w-32' : 'h-12 w-12'}`}
    >
      <Image
        fill
        style={{
          objectFit: 'cover',
          borderRadius: '100%',
        }}
        alt="Avatar"
        onClick={onClick}
        src={fetchedUser?.profileImage || '/images/placeholder.png'}
      />
    </div>
  );
};

export default Avatar;
