import { AxiosInstance } from 'axios';
import * as Y from 'yjs';

export type BlockId = string;

export type ExternalId = string;

export type ChildrenId = string;

export type ViewId = string;

export type RowId = string;

export type CellId = string;

export enum BlockType {
  Paragraph = 'paragraph',
  Page = 'page',
  HeadingBlock = 'heading',
  TodoListBlock = 'todo_list',
  BulletedListBlock = 'bulleted_list',
  NumberedListBlock = 'numbered_list',
  ToggleListBlock = 'toggle_list',
  CodeBlock = 'code',
  EquationBlock = 'math_equation',
  QuoteBlock = 'quote',
  CalloutBlock = 'callout',
  DividerBlock = 'divider',
  ImageBlock = 'image',
  VideoBlock = 'video',
  GridBlock = 'grid',
  BoardBlock = 'board',
  CalendarBlock = 'calendar',
  OutlineBlock = 'outline',
  TableBlock = 'table',
  TableCell = 'table/cell',
  LinkPreview = 'link_preview',
  FileBlock = 'file',
  GalleryBlock = 'multi_image',
  SubpageBlock = 'sub_page',
  SimpleTableBlock = 'simple_table',
  SimpleTableRowBlock = 'simple_table_row',
  SimpleTableCellBlock = 'simple_table_cell',
  ColumnsBlock = 'simple_columns',
  ColumnBlock = 'simple_column',
}

export enum InlineBlockType {
  Formula = 'formula',
  Mention = 'mention',
}

export enum AlignType {
  Left = 'left',
  Center = 'center',
  Right = 'right',
}

export interface BlockData {
  bgColor?: string;
  font_color?: string;
  align?: AlignType;
  delta?: {
    insert: string;
    attributes: Record<string, unknown>;
  }[];
}

export interface HeadingBlockData extends BlockData {
  level: number;
}

export interface NumberedListBlockData extends BlockData {
  number: number;
}

export interface TodoListBlockData extends BlockData {
  checked: boolean;
}

export interface ToggleListBlockData extends BlockData {
  collapsed: boolean;
  level?: number;
}

export interface CodeBlockData extends BlockData {
  language: string;
}

export interface CalloutBlockData extends BlockData {
  icon: string;
  icon_type?: 'emoji' | 'icon',
}

export interface MathEquationBlockData extends BlockData {
  formula?: string;
}

export interface LinkPreviewBlockData extends BlockData {
  url?: string;
}

export enum FieldURLType {
  Upload = 2,
  Link = 1,
}

export interface FileBlockData extends BlockData {
  name?: string;
  uploaded_at?: number;
  url?: string;
  url_type?: FieldURLType;
  retry_local_url?: string;
}

export enum ImageType {
  Local = 0,
  Internal = 1,
  External = 2,
}

export interface ImageBlockData extends BlockData {
  url?: string;
  width?: number;
  align?: AlignType;
  image_type?: ImageType;
  height?: number;
  retry_local_url?: string;
}

export enum VideoType {
  Local = 0,
  Internal = 1,
  External = 2,
}

export interface VideoBlockData extends BlockData {
  url?: string;
  width?: number;
  height?: number;
  align?: AlignType;
  video_type?: VideoType;
}

export enum GalleryLayout {
  Carousel = 0,
  Grid = 1,
}

export interface GalleryBlockData extends BlockData {
  images: {
    type: ImageType,
    url: string,
  }[];
  layout: GalleryLayout;
}

export interface OutlineBlockData extends BlockData {
  depth?: number;
}

export interface TableBlockData extends BlockData {
  colDefaultWidth: number;
  colMinimumWidth: number;
  colsHeight: number;
  colsLen: number;
  rowDefaultHeight: number;
  rowsLen: number;
}

export enum TableAlignType {
  Left = 'Left',
  Center = 'Center',
  Right = 'Right',
}

export interface SimpleTableData extends BlockData {
  column_widths?: Record<string, number>;
  enable_header_row?: boolean;
  row_colors?: Record<string, string>;
  enable_header_column?: boolean;
  column_aligns?: Record<string, TableAlignType>;
  column_colors?: Record<string, string>;
  row_aligns?: Record<string, TableAlignType>;
}

export interface TableCellBlockData extends BlockData {
  colPosition: number;
  height: number;
  rowPosition: number;
  width: number;
  rowBackgroundColor: string;
  colBackgroundColor: string;
}

export interface DatabaseNodeData extends BlockData {
  view_id: ViewId;
}

export interface SubpageNodeData extends BlockData {
  view_id: string;
}

export interface ColumnNodeData extends BlockData {
  ratio?: number;
}

export enum MentionType {
  PageRef = 'page',
  Date = 'date',
  childPage = 'childPage',
  externalLink = 'externalLink',
}

export interface Mention {
  // inline page ref id
  page_id?: string;
  block_id?: string;
  // reminder date ref id
  date?: string;
  reminder_id?: string;
  reminder_option?: string;

  // external link
  url?: string;
  type: MentionType;
}

export interface FolderMeta {
  current_view: ViewId;
  current_workspace: string;
}

export enum DocCoverType {
  Color = 'CoverType.color',
  Image = 'CoverType.file',
  Asset = 'CoverType.asset',
}

export type DocCover = {
  image_type?: ImageType;
  cover_selection_type?: DocCoverType;
  cover_selection?: string;
} | null;

export enum ViewLayout {
  Document = 0,
  Grid = 1,
  Board = 2,
  Calendar = 3,
  AIChat = 4,
}

export enum YjsEditorKey {
  data_section = 'data',
  document = 'document',
  database = 'database',
  workspace_database = 'databases',
  folder = 'folder',
  // eslint-disable-next-line @typescript-eslint/no-duplicate-enum-values
  database_row = 'data',
  user_awareness = 'user_awareness',
  empty = 'empty',

  // document
  blocks = 'blocks',
  page_id = 'page_id',
  meta = 'meta',
  children_map = 'children_map',
  text_map = 'text_map',
  text = 'text',
  delta = 'delta',
  block_id = 'id',
  block_type = 'ty',
  // eslint-disable-next-line @typescript-eslint/no-duplicate-enum-values
  block_data = 'data',
  block_parent = 'parent',
  block_children = 'children',
  block_external_id = 'external_id',
  block_external_type = 'external_type',
}

export enum YjsFolderKey {
  views = 'views',
  relation = 'relation',
  section = 'section',
  private = 'private',
  favorite = 'favorite',
  recent = 'recent',
  trash = 'trash',
  meta = 'meta',
  current_view = 'current_view',
  current_workspace = 'current_workspace',
  id = 'id',
  name = 'name',
  icon = 'icon',
  extra = 'extra',
  cover = 'cover',
  line_height_layout = 'line_height_layout',
  font_layout = 'font_layout',
  type = 'ty',
  value = 'value',
  layout = 'layout',
  bid = 'bid',
}

export enum YjsDatabaseKey {
  views = 'views',
  id = 'id',
  metas = 'metas',
  fields = 'fields',
  is_primary = 'is_primary',
  last_modified = 'last_modified',
  created_at = 'created_at',
  name = 'name',
  type = 'ty',
  type_option = 'type_option',
  content = 'content',
  data = 'data',
  iid = 'iid',
  database_id = 'database_id',
  field_orders = 'field_orders',
  field_settings = 'field_settings',
  visibility = 'visibility',
  wrap = 'wrap',
  width = 'width',
  filters = 'filters',
  groups = 'groups',
  layout = 'layout',
  layout_settings = 'layout_settings',
  modified_at = 'modified_at',
  row_orders = 'row_orders',
  sorts = 'sorts',
  height = 'height',
  cells = 'cells',
  field_type = 'field_type',
  end_timestamp = 'end_timestamp',
  include_time = 'include_time',
  is_range = 'is_range',
  reminder_id = 'reminder_id',
  time_format = 'time_format',
  date_format = 'date_format',
  calculations = 'calculations',
  field_id = 'field_id',
  calculation_value = 'calculation_value',
  condition = 'condition',
  format = 'format',
  filter_type = 'filter_type',
  visible = 'visible',
  hide_ungrouped_column = 'hide_ungrouped_column',
  collapse_hidden_groups = 'collapse_hidden_groups',
  first_day_of_week = 'first_day_of_week',
  show_week_numbers = 'show_week_numbers',
  show_weekends = 'show_weekends',
  layout_ty = 'layout_ty',
  icon = 'icon',
}

export interface YDoc extends Y.Doc {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getMap (key: YjsEditorKey.data_section): YSharedRoot | any;
}

export interface YDatabaseRow extends Y.Map<unknown> {
  get (key: YjsDatabaseKey.id): RowId;

  get (key: YjsDatabaseKey.height): string;

  get (key: YjsDatabaseKey.visibility): boolean;

  get (key: YjsDatabaseKey.cells): YDatabaseCells;

  get (key: YjsDatabaseKey.created_at): CreatedAt;

  get (key: YjsDatabaseKey.last_modified): LastModified;

}

export interface YDatabaseCells extends Y.Map<unknown> {
  get (key: FieldId): YDatabaseCell;
}

export type EndTimestamp = string;
export type ReminderId = string;

export interface YDatabaseCell extends Y.Map<unknown> {
  get (key: YjsDatabaseKey.created_at): CreatedAt;

  get (key: YjsDatabaseKey.last_modified): LastModified;

  get (key: YjsDatabaseKey.field_type): string;

  get (key: YjsDatabaseKey.data): object | string | boolean | number;

  get (key: YjsDatabaseKey.end_timestamp): EndTimestamp;

  get (key: YjsDatabaseKey.include_time): boolean;

  // eslint-disable-next-line @typescript-eslint/unified-signatures
  get (key: YjsDatabaseKey.is_range): boolean;

  get (key: YjsDatabaseKey.reminder_id): ReminderId;
}

export interface YSharedRoot extends Y.Map<unknown> {
  get (key: YjsEditorKey.document): YDocument;

  get (key: YjsEditorKey.folder): YFolder;

  get (key: YjsEditorKey.database): YDatabase;

  get (key: YjsEditorKey.database_row): YDatabaseRow;
}

export interface YFolder extends Y.Map<unknown> {
  get (key: YjsFolderKey.views): YViews;

  // eslint-disable-next-line @typescript-eslint/unified-signatures
  get (key: YjsFolderKey.meta): YFolderMeta;

  // eslint-disable-next-line @typescript-eslint/unified-signatures
  get (key: YjsFolderKey.relation): YFolderRelation;

  // eslint-disable-next-line @typescript-eslint/unified-signatures
  get (key: YjsFolderKey.section): YFolderSection;
}

export interface YViews extends Y.Map<unknown> {
  get (key: ViewId): YView;
}

export interface YView extends Y.Map<unknown> {
  get (key: YjsFolderKey.id): ViewId;

  get (key: YjsFolderKey.bid): string;

  // eslint-disable-next-line @typescript-eslint/unified-signatures
  get (key: YjsFolderKey.name): string;

  // eslint-disable-next-line @typescript-eslint/unified-signatures
  get (key: YjsFolderKey.icon | YjsFolderKey.extra): string;

  // eslint-disable-next-line @typescript-eslint/unified-signatures
  get (key: YjsFolderKey.layout): string;
}

export interface YFolderRelation extends Y.Map<unknown> {
  get (key: ViewId): Y.Array<ViewId>;
}

export interface YFolderMeta extends Y.Map<unknown> {
  get (key: YjsFolderKey.current_view | YjsFolderKey.current_workspace): string;
}

export interface YFolderSection extends Y.Map<unknown> {
  get (key: YjsFolderKey.favorite | YjsFolderKey.private | YjsFolderKey.recent | YjsFolderKey.trash): YFolderSectionItem;
}

export interface YFolderSectionItem extends Y.Map<unknown> {
  get (key: string): Y.Array<unknown>;
}

export interface YDocument extends Y.Map<unknown> {
  get (key: YjsEditorKey.blocks | YjsEditorKey.page_id | YjsEditorKey.meta): YBlocks | YMeta | string;
}

export interface YBlocks extends Y.Map<unknown> {
  get (key: BlockId): YBlock;
}

export interface YBlock extends Y.Map<unknown> {
  get (key: YjsEditorKey.block_id | YjsEditorKey.block_parent): BlockId;

  get (key: YjsEditorKey.block_type): BlockType;

  get (key: YjsEditorKey.block_data): string;

  get (key: YjsEditorKey.block_children): ChildrenId;

  get (key: YjsEditorKey.block_external_id): ExternalId;
}

export interface YMeta extends Y.Map<unknown> {
  get (key: YjsEditorKey.children_map | YjsEditorKey.text_map): YChildrenMap | YTextMap;
}

export interface YChildrenMap extends Y.Map<unknown> {
  get (key: ChildrenId): Y.Array<BlockId>;
}

export interface YTextMap extends Y.Map<unknown> {
  get (key: ExternalId): Y.Text;
}

export interface YDatabase extends Y.Map<unknown> {
  get (key: YjsDatabaseKey.views): YDatabaseViews;

  get (key: YjsDatabaseKey.metas): YDatabaseMetas;

  get (key: YjsDatabaseKey.fields): YDatabaseFields;

  get (key: YjsDatabaseKey.id): string;
}

export interface YDatabaseViews extends Y.Map<YDatabaseView> {
  get (key: ViewId): YDatabaseView;
}

export type DatabaseId = string;
export type CreatedAt = string;
export type LastModified = string;
export type ModifiedAt = string;
export type FieldId = string;

export enum DatabaseViewLayout {
  Grid = 0,
  Board = 1,
  Calendar = 2,
}

export interface YDatabaseView extends Y.Map<unknown> {
  get (key: YjsDatabaseKey.database_id): DatabaseId;

  get (key: YjsDatabaseKey.name): string;

  get (key: YjsDatabaseKey.created_at): CreatedAt;

  get (key: YjsDatabaseKey.modified_at): ModifiedAt;

  // eslint-disable-next-line @typescript-eslint/unified-signatures
  get (key: YjsDatabaseKey.layout): string;

  get (key: YjsDatabaseKey.layout_settings): YDatabaseLayoutSettings;

  get (key: YjsDatabaseKey.filters): YDatabaseFilters;

  get (key: YjsDatabaseKey.groups): YDatabaseGroups;

  get (key: YjsDatabaseKey.sorts): YDatabaseSorts;

  get (key: YjsDatabaseKey.field_settings): YDatabaseFieldSettings;

  get (key: YjsDatabaseKey.field_orders): YDatabaseFieldOrders;

  get (key: YjsDatabaseKey.row_orders): YDatabaseRowOrders;

  get (key: YjsDatabaseKey.calculations): YDatabaseCalculations;
}

export type YDatabaseFieldOrders = Y.Array<unknown>; // [ { id: FieldId } ]

export type YDatabaseRowOrders = Y.Array<YDatabaseRowOrder>; // [ { id: RowId, height: number } ]

export type YDatabaseGroups = Y.Array<YDatabaseGroup>;

export type YDatabaseFilters = Y.Array<YDatabaseFilter>;

export type YDatabaseSorts = Y.Array<YDatabaseSort>;

export type YDatabaseCalculations = Y.Array<YDatabaseCalculation>;

export type SortId = string;

export type GroupId = string;

export interface YDatabaseLayoutSettings extends Y.Map<unknown> {
  // DatabaseViewLayout.Board
  get (key: '1'): YDatabaseBoardLayoutSetting;

  // DatabaseViewLayout.Calendar
  get (key: '2'): YDatabaseCalendarLayoutSetting;
}

export interface YDatabaseBoardLayoutSetting extends Y.Map<unknown> {
  get (key: YjsDatabaseKey.hide_ungrouped_column | YjsDatabaseKey.collapse_hidden_groups): boolean;
}

export interface YDatabaseCalendarLayoutSetting extends Y.Map<unknown> {
  get (key: YjsDatabaseKey.first_day_of_week | YjsDatabaseKey.field_id | YjsDatabaseKey.layout_ty): string;

  get (key: YjsDatabaseKey.show_week_numbers | YjsDatabaseKey.show_weekends): boolean;
}

export interface YDatabaseGroup extends Y.Map<unknown> {
  get (key: YjsDatabaseKey.id): GroupId;

  get (key: YjsDatabaseKey.field_id): FieldId;

  // eslint-disable-next-line @typescript-eslint/unified-signatures
  get (key: YjsDatabaseKey.content): string;

  get (key: YjsDatabaseKey.groups): YDatabaseGroupColumns;
}

export type YDatabaseGroupColumns = Y.Array<YDatabaseGroupColumn>;

export interface YDatabaseGroupColumn extends Y.Map<unknown> {
  get (key: YjsDatabaseKey.id): string;

  get (key: YjsDatabaseKey.visible): boolean;
}

export interface YDatabaseRowOrder extends Y.Map<unknown> {
  get (key: YjsDatabaseKey.id): SortId;

  get (key: YjsDatabaseKey.height): number;
}

export interface YDatabaseSort extends Y.Map<unknown> {
  get (key: YjsDatabaseKey.id): SortId;

  get (key: YjsDatabaseKey.field_id): FieldId;

  get (key: YjsDatabaseKey.condition): string;
}

export type FilterId = string;

export interface YDatabaseFilter extends Y.Map<unknown> {
  get (key: YjsDatabaseKey.id): FilterId;

  get (key: YjsDatabaseKey.field_id): FieldId;

  get (key: YjsDatabaseKey.type | YjsDatabaseKey.condition | YjsDatabaseKey.content | YjsDatabaseKey.filter_type): string;
}

export interface YDatabaseCalculation extends Y.Map<unknown> {
  get (key: YjsDatabaseKey.field_id): FieldId;

  get (key: YjsDatabaseKey.id | YjsDatabaseKey.type | YjsDatabaseKey.calculation_value): string;
}

export interface YDatabaseFieldSettings extends Y.Map<unknown> {
  get (key: FieldId): YDatabaseFieldSetting;
}

export interface YDatabaseFieldSetting extends Y.Map<unknown> {
  get (key: YjsDatabaseKey.visibility): string;

  get (key: YjsDatabaseKey.wrap): boolean;

  // eslint-disable-next-line @typescript-eslint/unified-signatures
  get (key: YjsDatabaseKey.width): string;
}

export interface YDatabaseMetas extends Y.Map<unknown> {
  get (key: YjsDatabaseKey.iid): string;
}

export interface YDatabaseFields extends Y.Map<YDatabaseField> {
  get (key: FieldId): YDatabaseField;
}

export interface YDatabaseField extends Y.Map<unknown> {
  get (key: YjsDatabaseKey.name): string;

  get (key: YjsDatabaseKey.id): FieldId;

  // eslint-disable-next-line @typescript-eslint/unified-signatures
  get (key: YjsDatabaseKey.icon): string;

  // eslint-disable-next-line @typescript-eslint/unified-signatures
  get (key: YjsDatabaseKey.type): string;

  get (key: YjsDatabaseKey.type_option): YDatabaseFieldTypeOption;

  get (key: YjsDatabaseKey.is_primary): boolean;

  get (key: YjsDatabaseKey.last_modified): LastModified;
}

export interface YDatabaseFieldTypeOption extends Y.Map<unknown> {
  // key is the field type
  get (key: string): YMapFieldTypeOption;
}

export interface YMapFieldTypeOption extends Y.Map<unknown> {
  get (key: YjsDatabaseKey.content): string;

  // eslint-disable-next-line @typescript-eslint/unified-signatures
  get (key: YjsDatabaseKey.data): string;

  // eslint-disable-next-line @typescript-eslint/unified-signatures
  get (key: YjsDatabaseKey.time_format): string;

  // eslint-disable-next-line @typescript-eslint/unified-signatures
  get (key: YjsDatabaseKey.date_format): string;

  get (key: YjsDatabaseKey.database_id): DatabaseId;

  // eslint-disable-next-line @typescript-eslint/unified-signatures
  get (key: YjsDatabaseKey.format): string;
}

export enum Types {
  Document = 0,
  Database = 1,
  WorkspaceDatabase = 2,
  Folder = 3,
  DatabaseRow = 4,
  UserAwareness = 5,
  Empty = 6,
}

export enum CollabOrigin {
  // from local changes
  Local = 'local',
  // from remote changes and never sync to remote.
  Remote = 'remote',

}

export interface PublishViewPayload {
  publish_name?: string;
  visible_database_view_ids?: string[];
}

export interface UploadPublishNamespacePayload {
  old_namespace: string;
  new_namespace: string;
}

export const layoutMap = {
  [ViewLayout.Document]: 'document',
  [ViewLayout.Grid]: 'grid',
  [ViewLayout.Board]: 'board',
  [ViewLayout.Calendar]: 'calendar',
};

export const databaseLayoutMap = {
  [DatabaseViewLayout.Grid]: 'grid',
  [DatabaseViewLayout.Board]: 'board',
  [DatabaseViewLayout.Calendar]: 'calendar',
};

export enum FontLayout {
  small = 'small',
  normal = 'normal',
  large = 'large',
}

export enum LineHeightLayout {
  small = 'small',
  normal = 'normal',
  large = 'large',
}

export interface ViewMetaIcon {
  ty: number;
  value: string;
}

export interface ViewInfo {
  view_id: string;
  name: string;
  icon: ViewMetaIcon | null;
  extra: string | null;
  layout: number;
  created_at: string;
  created_by: string;
  last_edited_time: string;
  last_edited_by: string;
  child_views: ViewInfo[] | null;
}

export interface PublishViewMetaData {
  view: ViewInfo;
  child_views: ViewInfo[];
  ancestor_views: ViewInfo[];
}

export type AppendBreadcrumb = (view?: View) => void;

export type CreateRowDoc = (rowKey: string) => Promise<YDoc>;
export type LoadView = (viewId: string, isSubDocument?: boolean) => Promise<YDoc>;

export type LoadViewMeta = (viewId: string, onChange?: (meta: View | null) => void) => Promise<View>;

export type DatabaseRelations = Record<DatabaseId, ViewId>;

export interface Workspace {
  icon: string;
  id: string;
  name: string;
  memberCount: number;
  owner?: {
    uid: number;
    name: string;
  };
  databaseStorageId: string;
  createdAt: string;
}

export interface UserWorkspaceInfo {
  userId: string;
  selectedWorkspace: Workspace;
  workspaces: Workspace[];
}

export interface SpaceView {
  id: string;
  extra: string | null;
  name: string;
  isPrivate: boolean;
}

export interface FolderView {
  id: string;
  icon: string | null;
  extra: string | null;
  name: string;
  isSpace: boolean;
  isPrivate: boolean;
  children: FolderView[];
}

export interface User {
  email: string | null;
  name: string | null;
  uid: string;
  avatar: string | null;
  uuid: string;
  latestWorkspaceId: string;
}

export interface DuplicatePublishView {
  workspaceId: string;
  spaceViewId: string;
  collabType: Types;
  viewId: string;
}

export enum ViewIconType {
  Emoji = 0,
  URL = 1,
  Icon = 2,
}

export interface ViewIcon {
  ty: ViewIconType;
  value: string;
}

export enum SpacePermission {
  Public = 0,
  Private = 1,
}

export interface ViewExtra {
  is_space: boolean;
  space_created_at?: number;
  space_icon?: string;
  space_icon_color?: string;
  space_permission?: number;
  is_pinned?: boolean;
  cover?: {
    type: CoverType;
    value: string;
  };
}

export interface View {
  view_id: string;
  name: string;
  icon: ViewIcon | null;
  layout: ViewLayout;
  extra: ViewExtra | null;
  children: View[];
  is_published: boolean;
  is_private: boolean;
  last_edited_time?: string;
  favorited_at?: string;
  last_viewed_at?: string;
  created_at?: string;
  database_relations?: DatabaseRelations;
  publisher_email?: string;
  publish_name?: string;
  publish_timestamp?: string;
}

export interface UpdatePublishConfigPayload {
  comments_enabled?: boolean;
  duplicate_enabled?: boolean;
  publish_name?: string;
  view_id: string;
}

export interface Invitation {
  invite_id: string;
  workspace_id: string;
  workspace_name: string;
  inviter_email: string;
  inviter_name: string;
  inviter_icon: string;
  workspace_icon: string;
  member_count: number;
  status: 'Accepted' | 'Pending';
}

export enum CoverType {
  NormalColor = 'color',
  GradientColor = 'gradient',
  BuildInImage = 'built_in',
  CustomImage = 'custom',
  LocalImage = 'local',
  UpsplashImage = 'unsplash',
  None = 'none',
}

export enum RowCoverType {
  ColorCover = 0,
  FileCover = 1,
  AssetCover = 2,
  GradientCover = 3,
}

export enum UIVariant {
  Publish = 'publish',
  App = 'app',
  Recent = 'recent',
  Favorite = 'favorite',
}

export interface AFWebUser {
  uuid: string;
  name: string;
  avatarUrl: string | null;
}

export enum RequestAccessInfoStatus {
  Pending = 0,
  Accepted = 1,
  Rejected = 2,
}

export enum Role {
  Owner = 'Owner',
  Member = 'Member',
  Guest = 'Guest',
}

export interface WorkspaceMember {
  name: string;
  email: string;
  avatar_url: string;
  role: Role;
}

export interface GetRequestAccessInfoResponse {
  request_id: string;
  workspace: Workspace;
  requester: AFWebUser & {
    email: string;
  };
  view: View;
  status: RequestAccessInfoStatus;
}

export enum SubscriptionPlan {
  Free = 'free',
  Pro = 'pro',
  Team = 'team',
  AIMax = 'ai_max'
}

export enum SubscriptionInterval {
  Month = 'month',
  Year = 'year',
}

export interface Subscription {
  currency: string;
  plan: SubscriptionPlan;
  price_cents: number;
  recurring_interval: SubscriptionInterval;
}

export type Subscriptions = Subscription[];

export interface UpdatePagePayload {
  name: string;
  icon?: {
    ty: ViewIconType,
    value: string,
  };
  extra?: Partial<ViewExtra>;
}

export interface ViewMetaCover {
  type: CoverType;
  value: string;
}

export interface ViewMetaProps {
  icon?: ViewMetaIcon;
  cover?: ViewMetaCover;
  name?: string;
  viewId?: string;
  workspaceId?: string;
  layout?: ViewLayout;
  visibleViewIds?: string[];
  extra?: ViewExtra | null;
  readOnly?: boolean;
  updatePage?: (viewId: string, data: UpdatePagePayload) => Promise<void>;
  uploadFile?: (file: File) => Promise<string>;
  onEnter?: (text: string) => void;
  maxWidth?: number;
}

export interface TextCount {
  words: number;
  characters: number;
}

export interface ViewComponentProps {
  doc: YDoc;
  workspaceId: string;
  readOnly: boolean;
  navigateToView?: (viewId: string, blockId?: string) => Promise<void>;
  loadViewMeta?: LoadViewMeta;
  createRowDoc?: CreateRowDoc;
  loadView?: LoadView;
  viewMeta: ViewMetaProps;
  appendBreadcrumb?: AppendBreadcrumb;
  onRendered?: () => void;
  updatePage?: (viewId: string, data: UpdatePagePayload) => Promise<void>;
  addPage?: (parentId: string, payload: CreatePagePayload) => Promise<string>;
  deletePage?: (viewId: string) => Promise<void>;
  openPageModal?: (viewId: string) => void;
  variant?: UIVariant;
  isTemplateThumb?: boolean;
  loadViews?: (variant?: UIVariant) => Promise<View[] | undefined>;
  onWordCountChange?: (viewId: string, props: TextCount) => void;
  uploadFile?: (file: File) => Promise<string>;
  requestInstance?: AxiosInstance | null;
}

export interface CreatePagePayload {
  layout: ViewLayout;
  name?: string;
}

export interface CreateSpacePayload {
  name?: string;
  space_icon?: string;
  space_icon_color?: string;
  space_permission?: SpacePermission, // 0 for public space, 1 for private space
}

export interface UpdateSpacePayload extends CreateSpacePayload {
  view_id: string;
}

export interface QuickNoteEditorData {
  type: string;
  delta: { insert: string, attributes?: Record<string, string | boolean | number> }[];
  data?: BlockData;
  children: QuickNoteEditorData[];
}

export interface QuickNote {
  id: string;
  title: string;
  data: QuickNoteEditorData[],
  created_at: string;
  last_updated_at: string;
}

export interface CreateWorkspacePayload {
  workspace_name: string;
}

export interface UpdateWorkspacePayload {
  workspace_name: string;
}

export enum SettingMenuItem {
  ACCOUNT = 'ACCOUNT',
  WORKSPACE = 'WORKSPACE',
  MEMBERS = 'MEMBERS',
  SITES = 'SITES',
}