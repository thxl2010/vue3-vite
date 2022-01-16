import request from '@/utils/request';
import type {
  IListForm,
  IReply,
  // IDeleteAttrsParams,
  // IAttrTplForm,
  IVirtualReply,
} from '@/api/types/product-reply';

/**
 * 商品评论列表
 */
export const getReplyList = (params: IListForm) => {
  return request<{
    list: IReply[];
    count: number;
  }>({
    method: 'GET',
    url: '/product/reply',
    params,
  });
};

/**
 * 删除商品评论
 */
export const deleteReply = (id: number) => {
  return request<{
    msg: string;
    status: string;
  }>({
    method: 'DELETE',
    url: `/product/reply/delete/${id}`,
  });
};

/**
 * 回复
 */
export const reply = (id: IReply['id'], data: { content: string }) => {
  return request<{
    msg: string;
    status: string;
  }>({
    method: 'PUT',
    url: `/product/reply/set_reply/${id}`,
    data,
  });
};

/**
 * 添加虚拟评论
 */
export const addVirtualReply = (data: IVirtualReply) => {
  return request<{
    msg: string;
    status: string;
  }>({
    method: 'POST',
    url: `/product/reply/save_fictitious_reply`,
    data,
  });
};
