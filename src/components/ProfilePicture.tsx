import { classNames } from '@/lib/utils';

const ProfilePicture = ({ className = '' }: { className?: string }) => {
  return (
    <img
      className={classNames('my-4 h-16 w-16 rounded-full pfp', className)}
      src='https://avatars.githubusercontent.com/u/22807629?v=4'
      alt='pfp'
    />
  );
};

export default ProfilePicture;
