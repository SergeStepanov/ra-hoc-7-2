import React from 'react';
import Video from './Video';
import Article from './Article';
import withHighlightingBlocks from './withHighlightingBlocks';
import { nanoid } from 'nanoid';

export default function List(props) {
  return props.list.map((item) => {
    switch (item.type) {
      case 'video':
        const VideoHighlightingBlocks = withHighlightingBlocks(Video);

        return <VideoHighlightingBlocks {...item} key={nanoid()} />;

      case 'article':
        const ArticleHighlightingBlocks = withHighlightingBlocks(Article);

        return <ArticleHighlightingBlocks {...item} key={nanoid()} />;

      default: return null;
    }
  });
}
