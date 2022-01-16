export interface IListForm {
  page?: number;
  limit?: number;
  account?: string; //	评论用户名
  is_reply?: string; // 是否回复 1/0
  store_name?: string; //	产品名称
  data?: string; // 时间选择
  product_id?: number; //	指定商品评论 （默认）0-表示所有商品评论
}

export interface IReply {
  id?: number;
  product_id?: number; // 产品id
  account?: string; // 		用户名名称
  image?: string; // 		商品图片
  store_name?: string; // 		商品名称
  comment?: string; // 		评论内容
  pics?: string; // 		评论图片
  add_time?: number; // 添加时间
  merchant_reply_content?: string; // 回复内容
  score?: string; // 		评分
  create_time?: string; // 		添加时间转换后
  time?: string; // 		表示时间间隔	mock: 3分钟前
}

export interface IVirtualReply {
  product_id: string; // 商品ID
  nickname: string; // 用户昵称
  avatar: string; // 用户头像
  comment: string; // 评论内容
  pics: string; // 评论图片，数组
  product_score: string; //	商品分数
  service_score: string; // 服务分数
  add_time?: string; // 评论时间：为空默认当前时间
}
