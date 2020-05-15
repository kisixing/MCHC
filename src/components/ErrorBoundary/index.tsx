import React from 'react';
import PageError from './PageError';

export default class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    // TODO: 考虑在此处不错误信息上传到服务器
    console.error('发生错误,错误信息为: ');
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <PageError />;
    }

    return this.props.children;
  }
}
