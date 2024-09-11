// @ts-nocheck
import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableWithoutFeedback,
  ImageBackground,
  ImageSourcePropType,
  ViewStyle,
  TextStyle,
} from 'react-native';

interface AnimatedCardProps {
  title: string;
  subtitle?: string;
  content: string;
  imageSource: ImageSourcePropType;
  onPress?: () => void;
  style?: ViewStyle;
  titleStyle?: TextStyle;
  subtitleStyle?: TextStyle;
  contentStyle?: TextStyle;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({
  title,
  subtitle,
  content,
  imageSource,
  onPress,
  style,
  titleStyle,
  subtitleStyle,
  contentStyle,
}) => {
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const [elevation, setElevation] = useState(5);

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
    setElevation(8);
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 3,
      tension: 40,
      useNativeDriver: true,
    }).start();
    setElevation(5);
  };

  return (
    <TouchableWithoutFeedback
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={onPress}
    >
      <Animated.View style={[
        styles.card,
        { transform: [{ scale: scaleAnim }], elevation },
        style
      ]}>
        <ImageBackground
          source={imageSource}
          style={styles.imageBackground}
          imageStyle={styles.image}
        >
          <View style={styles.overlay} />
          <View style={styles.content}>
            <Text style={[styles.title, titleStyle]}>{title}</Text>
            {subtitle && (
              <Text style={[styles.subtitle, subtitleStyle]}>{subtitle}</Text>
            )}
            <Text style={[styles.text, contentStyle]}>{content}</Text>
          </View>
        </ImageBackground>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: 'white',
    margin: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  imageBackground: {
    width: '100%',
    height: 200,
    justifyContent: 'flex-end',
  },
  image: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    resizeMode: 'contain',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.8)',
    marginBottom: 8,
  },
  text: {
    fontSize: 14,
    color: 'white',
  },
});

export default AnimatedCard;