import React from 'react';
import { FlatList } from 'react-native';

const VirtualizedList = ({
  style,
  children,
  showsVerticalScrollIndicator = false,
  contentContainerStyle,
  onScroll,
  scrollEventThrottle = 1,
}) => {
  return (
    <FlatList
      onScroll={onScroll}
      keyboardShouldPersistTaps="always"
      keyboardDismissMode="on-drag"
      contentContainerStyle={contentContainerStyle}
      scrollEventThrottle={scrollEventThrottle}
      style={style}
      data={[]}
      keyExtractor={(item, index) => `key-${index}`}
      renderItem={null}
      ListHeaderComponent={<>{children}</>}
      showsVerticalScrollIndicator={showsVerticalScrollIndicator}
    />
  );
};

export default VirtualizedList;
