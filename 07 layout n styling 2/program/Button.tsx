import React, { useRef } from 'react';
import {
  TouchableWithoutFeedback,
  Animated,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  ActivityIndicator,
} from 'react-native';

interface AnimatedButtonProps {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
  disabled?: boolean;
  loading?: boolean;
  loadingColor?: string;
  activeOpacity?: number;
  backgroundColor?: string;
  textColor?: string;
}

export default function AnimatedButton({
  title,
  onPress,
  style,
  textStyle,
  disabled = false,
  loading = false,
  loadingColor = '#ffffff',
  activeOpacity = 0.8,
  backgroundColor = '#007AFF',
  textColor = '#ffffff',
}: AnimatedButtonProps) {
  const scaleValue = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scaleValue, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleValue, {
      toValue: 1,
      friction: 3,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  return (
    <TouchableWithoutFeedback
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={onPress}
      disabled={disabled || loading}
    >
      <Animated.View
        style={[
          styles.button,
          { backgroundColor, opacity: disabled ? 0.6 : 1 },
          { transform: [{ scale: scaleValue }] },
          style,
        ]}
      >
        {loading ? (
          <ActivityIndicator color={loadingColor} />
        ) : (
          <Text style={[styles.text, { color: textColor }, textStyle]}>
            {title}
          </Text>
        )}
      </Animated.View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});