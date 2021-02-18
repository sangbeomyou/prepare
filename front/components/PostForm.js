import React, { useMemo, useCallback, useRef, useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
// import { addPost } from '../reducers/post';
import useInput from '../hooks/useInput';
import { ADD_POST_REQUEST } from '../actions/post';

const PostForm = () => {
  const style = useMemo(() => ({ margin: '10px 0 20px' }), []);
  const ButtonStyle = useMemo(() => ({ float: 'right' }), []);
  const imagePathStyle = useMemo(() => ({ display: 'inline-block' }), []);
  const imageStyle = useMemo(() => ({ width: '200px' }), []);

  const { imagePaths, addPostDone } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const imageInput = useRef();
  const [text, onChangeText, setText] = useInput('');

  useEffect(() => {
    if (addPostDone) {
      setText('');
    }
  }, [addPostDone]);

  // const onSubmit = useCallback(() => {
  //   dispatch(addPost(text));
  // }, [text]);

  const onSubmit = useCallback(() => {
    dispatch({
      type: ADD_POST_REQUEST,
      data: text,
    });
  }, [text]);

  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);
  return (
    <Form style={style} encType="multipart/form-data" onFinish={onSubmit}>
      <Input.TextArea value={text} onChange={onChangeText} maxLength={140} placeholder="어떤 신기한 일이 있었나요" />
      <div style={style}>
        <input type="file" multiple hidden ref={imageInput} />
        <Button onClick={onClickImageUpload}>이미지 업로드</Button>
        <Button type="primary" style={ButtonStyle} htmlType="submit">짹짹</Button>
      </div>
      <div>
        {imagePaths.map((v) => (
          <div key={v} style={imagePathStyle}>
            <img src={v} style={imageStyle} alt={v} />
            <div>
              <Button>제거</Button>
            </div>
          </div>
        ))}
      </div>
    </Form>
  );
};

export default PostForm;
