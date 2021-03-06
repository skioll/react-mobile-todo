import merge from 'merge';

export default {
  namespace: 'new',
  state: {
    modules: {
      info: '基础信息',
      time: '时间信息',
      remind: '提醒',
    },
    title: {
      placeholder: '请输入标题',
      label: '标题',
      value: '',
    },
    content: {
      label: '内容',
      value: '',
      placeholder: '请输入内容',
    },
    startTime: {
      label: '开始时间',
      value: new Date(),
    },
    endTime: {
      label: '结束时间',
      value: new Date(new Date().getTime() + 100000),
    },
    push: {
      label: '推送',
      value: false,
    },
  },
  reducers: {
    updateForm(state, { payload: data }) {
      return merge.recursive(true, state, data);
    },
    init(state, {
      payload: data = {
        title: {
          value: '',
        },
        content: {
          value: '',
        },
        startTime: {
          value: new Date(),
        },
        endTime: {
          value: new Date(new Date().getTime() + 100000),
        },
        push: {
          value: false,
        },
      },
    }) {
      return merge.recursive(true, state, data);
    },
  },
};
