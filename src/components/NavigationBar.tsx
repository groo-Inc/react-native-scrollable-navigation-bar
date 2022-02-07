import React, { useMemo } from 'react';
import { View, Text, StyleSheet, TextStyle } from 'react-native';
import { NAVIGATION_BAR_HEIGHT } from '../constants';
import Appearer from '../Appearer';

export interface NavigationBarProps {
  backgroundColor?: string;
  height?: number;
  title?: string;
  titleStyle?: TextStyle;
  leftIcons?: React.ReactElement[];
  rightIcons?: React.ReactElement[];
}

const NavigationBar: React.FC<NavigationBarProps> = ({
  backgroundColor = 'transparent',
  height = NAVIGATION_BAR_HEIGHT,
  title,
  titleStyle,
  leftIcons = [],
  rightIcons = [],
}) => {
  const backgroundStyle = useMemo(() => {
    return [
      styles.container,
      {
        height,
        backgroundColor,
      },
    ];
  }, [backgroundColor, height]);

  const iconLeftWrapper = useMemo(() => {
    return (icon: React.ReactElement, index: number) => {
      return (
        <View style={styles.iconLeftContainer} key={index.toString()}>
          {icon}
        </View>
      );
    };
  }, []);

  const iconRightWrapper = useMemo(() => {
    return (icon: React.ReactElement, index: number) => {
      return (
        <View style={styles.iconRightContainer} key={index.toString()}>
          {icon}
        </View>
      );
    };
  }, []);

  return (
    <View style={backgroundStyle}>
      <View style={styles.leftIconsContainer}>
        {leftIcons.map(iconLeftWrapper)}
      </View>
      <View style={styles.rightIconsContainer}>
        {rightIcons.map(iconRightWrapper)}
      </View>
      <Appearer style={styles.titleContainer}>
        <Text style={[styles.title, titleStyle]}>{title}</Text>
      </Appearer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  titleContainer: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
  },
  iconLeftContainer: {
    marginRight: 20,
  },
  iconRightContainer: {
    marginLeft: 20,
  },
  leftIconsContainer: {
    flexDirection: 'row',
  },

  rightIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});

export default NavigationBar;
