import { FieldType } from '@/application/database-yjs/database.type';
import { FC, memo } from 'react';
import { ReactComponent as TextSvg } from '@/assets/icons/text.svg?react';
import { ReactComponent as NumberSvg } from '@/assets/icons/number.svg?react';
import { ReactComponent as DateSvg } from '@/assets/icons/date.svg?react';
import { ReactComponent as SingleSelectSvg } from '@/assets/icons/single_select.svg?react';
import { ReactComponent as MultiSelectSvg } from '@/assets/icons/multiselect.svg?react';
import { ReactComponent as ChecklistSvg } from '@/assets/icons/checklist.svg?react';
import { ReactComponent as CheckboxSvg } from '@/assets/icons/checkbox.svg?react';
import { ReactComponent as URLSvg } from '@/assets/icons/link.svg?react';
import { ReactComponent as LastEditedTimeSvg } from '@/assets/icons/last_modified.svg?react';
import { ReactComponent as CreatedSvg } from '@/assets/icons/created_at.svg?react';
import { ReactComponent as RelationSvg } from '@/assets/icons/relation.svg?react';
import { ReactComponent as AISummariesSvg } from '@/assets/icons/ai_summary.svg?react';
import { ReactComponent as AITranslationsSvg } from '@/assets/icons/ai_translate.svg?react';
import { ReactComponent as FileMediaSvg } from '@/assets/icons/attachment.svg?react';

export const FieldTypeSvgMap: Record<FieldType, FC<React.SVGProps<SVGSVGElement>>> = {
  [FieldType.RichText]: TextSvg,
  [FieldType.Number]: NumberSvg,
  [FieldType.DateTime]: DateSvg,
  [FieldType.SingleSelect]: SingleSelectSvg,
  [FieldType.MultiSelect]: MultiSelectSvg,
  [FieldType.Checkbox]: CheckboxSvg,
  [FieldType.URL]: URLSvg,
  [FieldType.Checklist]: ChecklistSvg,
  [FieldType.LastEditedTime]: LastEditedTimeSvg,
  [FieldType.CreatedTime]: CreatedSvg,
  [FieldType.Relation]: RelationSvg,
  [FieldType.AISummaries]: AISummariesSvg,
  [FieldType.AITranslations]: AITranslationsSvg,
  [FieldType.FileMedia]: FileMediaSvg,
};

export const FieldTypeIcon: FC<{ type: FieldType; className?: string }> = memo(({ type, ...props }) => {
  const Svg = FieldTypeSvgMap[type];

  if (!Svg) return null;
  return <Svg {...props} />;
});
