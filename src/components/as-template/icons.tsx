import { TemplateIcon } from '@/application/template.type';
import { ReactComponent as Youtube } from '@/assets/icons/youtube.svg?react';
import { ReactComponent as Twitter } from '@/assets/icons/twitter.svg?react';
import { ReactComponent as Instagram } from '@/assets/icons/instagram.svg?react';
import { ReactComponent as Facebook } from '@/assets/icons/facebook.svg?react';
import { ReactComponent as Tiktok } from '@/assets/icons/tiktok.svg?react';
import { ReactComponent as Website } from '@/assets/icons/earth.svg?react';
import { ReactComponent as LinkedInIcon } from '@/assets/icons/linkedin.svg?react';
import { ReactComponent as LightningIcon } from '@/assets/icons/lightning.svg?react';
import { ReactComponent as MonitorIcon } from '@/assets/icons/monitor.svg?react';
import { ReactComponent as Lightbulb } from '@/assets/icons/lightbulb.svg?react';
import { ReactComponent as GraduationCap } from '@/assets/icons/graduation_cap.svg?react';
import { ReactComponent as Database } from '@/assets/icons/database.svg?react';
import { ReactComponent as Columns } from '@/assets/icons/columns.svg?react';
import { ReactComponent as UsersThree } from '@/assets/icons/users.svg?react';
import { ReactComponent as ChatCircleText } from '@/assets/icons/chat_circle_text.svg?react';
import { ReactComponent as MegaphoneSimple } from '@/assets/icons/megaphone_simple.svg?react';
import { ReactComponent as UserIcon } from '@/assets/icons/user.svg?react';
import { ReactComponent as CurrencyCircleDollar } from '@/assets/icons/currency_circle_dollar.svg?react';
import { ReactComponent as Sparkle } from '@/assets/icons/ai.svg?react';
import { ReactComponent as Notepad } from '@/assets/icons/notepad.svg?react';
import { ReactComponent as Book } from '@/assets/icons/book.svg?react';

const categoryIcons: Record<string, React.ReactElement> = {
  [TemplateIcon.project]: <LightningIcon />,
  [TemplateIcon.engineering]: <MonitorIcon />,
  [TemplateIcon.startups]: <Lightbulb />,
  [TemplateIcon.schools]: <GraduationCap />,
  [TemplateIcon.marketing]: <MegaphoneSimple />,
  [TemplateIcon.management]: <ChatCircleText />,
  [TemplateIcon.humanResources]: <UserIcon />,
  [TemplateIcon.sales]: <CurrencyCircleDollar />,
  [TemplateIcon.teamMeetings]: <UsersThree />,
  [TemplateIcon.ai]: <Sparkle />,
  [TemplateIcon.docs]: <Notepad />,
  [TemplateIcon.wiki]: <Book />,
  [TemplateIcon.database]: <Database />,
  [TemplateIcon.kanban]: <Columns />,
};

export function CategoryIcon({ icon }: { icon: TemplateIcon }) {
  return categoryIcons[icon] || null;
}

export function accountLinkIcon(type: string) {
  switch (type) {
    case 'youtube':
      return <Youtube className='h-5 w-5' />;
    case 'twitter':
      return <Twitter className='h-5 w-5' />;
    case 'tiktok':
      return <Tiktok className='h-5 w-5' />;
    case 'facebook':
      return <Facebook className='h-5 w-5' />;
    case 'instagram':
      return <Instagram className='h-5 w-5' />;
    case 'linkedin':
      return <LinkedInIcon className='h-5 w-5' />;
    default:
      return <Website className='h-5 w-5' />;
  }
}
