import React, { useCallback, useMemo, useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import useInput from '../hooks/useInput';
import { ADD_COMMENT_REQUEST } from '../actions/post';

const CommentForm = ({ post }) => {
  const dispatch = useDispatch();
  const FormItem = useMemo(() => ({ position: 'relative', margin: 0 }), []);
  const FormButton = useMemo(() => ({ position: 'absolute', right: 0, bottom: -40, zIndex: 1 }), []);

  const id = useSelector((state) => state.user.me?.id);
  const { addCommentDone, addCommentLoading } = useSelector((state) => state.post);
  const [commentText, onChangeCommentText, setCommentText] = useInput('');

  useEffect(() => {
    if (addCommentDone) {
      setCommentText('');
    }
  }, [addCommentDone]);

  const onSubmutComment = useCallback(() => {
    console.log(post.id, commentText);
    dispatch({
      type: ADD_COMMENT_REQUEST,
      data: { content: commentText, postId: post.id, userId: id },
    });
    setCommentText('');
  }, [commentText, id]);
  return (
    <Form onFinish={onSubmutComment}>
      <Form.Item style={FormItem}>
        <Input.TextArea value={commentText} onChange={onChangeCommentText} rows={4} />
        <Button style={FormButton} type="primary" htmlType="submit" loading={addCommentLoading}>삐약</Button>
      </Form.Item>
    </Form>
  );
};

CommentForm.propTypes = {
  post: PropTypes.object.isRequired,
};

export default CommentForm;
