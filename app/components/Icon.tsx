import * as React from "react"
import { ComponentType } from "react"
import {
  Image,
  ImageStyle,
  StyleProp,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from "react-native"

export type IconTypes = keyof typeof iconRegistry

interface IconProps extends TouchableOpacityProps {
  /**
   * The name of the icon
   */
  icon: IconTypes

  /**
   * An optional tint color for the icon
   */
  color?: string

  /**
   * An optional size for the icon. If not provided, the icon will be sized to the icon's resolution.
   */
  size?: number

  /**
   * Style overrides for the icon image
   */
  style?: StyleProp<ImageStyle>

  /**
   * Style overrides for the icon container
   */
  containerStyle?: StyleProp<ViewStyle>

  /**
   * An optional function to be called when the icon is pressed
   */
  onPress?: TouchableOpacityProps["onPress"]
}

/**
 * A component to render a registered icon.
 * It is wrapped in a <TouchableOpacity /> if `onPress` is provided, otherwise a <View />.
 *
 * - [Documentation and Examples](https://github.com/infinitered/ignite/blob/master/docs/Components-Icon.md)
 */
export function Icon(props: IconProps) {
  const {
    icon,
    color,
    size,
    style: $imageStyleOverride,
    containerStyle: $containerStyleOverride,
    ...WrapperProps
  } = props

  const isPressable = !!WrapperProps.onPress
  const Wrapper: ComponentType<TouchableOpacityProps> = WrapperProps?.onPress
    ? TouchableOpacity
    : View

  return (
    <Wrapper
      accessibilityRole={isPressable ? "imagebutton" : undefined}
      {...WrapperProps}
      style={$containerStyleOverride}
    >
      <Image
        style={[
          $imageStyle,
          color && { tintColor: color },
          size && { width: size, height: size },
          $imageStyleOverride,
        ]}
        source={iconRegistry[icon]}
      />
    </Wrapper>
  )
}

export const iconRegistry = {
  account: require("../../assets/icons/account.png"),
  axis3d: require("../../assets/icons/axis3d.png"),
  back: require("../../assets/icons/back.png"),
  bell: require("../../assets/icons/bell.png"),
  brush: require("../../assets/icons/brush.png"),
  calculator: require("../../assets/icons/calculator.png"),
  call: require("../../assets/icons/call.png"),
  card: require("../../assets/icons/card.png"),
  caretLeft: require("../../assets/icons/caretLeft.png"),
  caretRight: require("../../assets/icons/caretRight.png"),
  cart: require("../../assets/icons/cart.png"),
  check: require("../../assets/icons/check.png"),
  circlecolor: require("../../assets/icons/circlecolor.png"),
  clap: require("../../assets/icons/clap.png"),
  community: require("../../assets/icons/community.png"),
  components: require("../../assets/icons/components.png"),
  debug: require("../../assets/icons/debug.png"),
  gear: require("../../assets/icons/gear.png"),
  gift: require("../../assets/icons/gift.png"),
  github: require("../../assets/icons/github.png"),
  heart: require("../../assets/icons/heart.png"),
  hidden: require("../../assets/icons/hidden.png"),
  home: require("../../assets/icons/home.png"),
  info: require("../../assets/icons/info.png"),
  ladybug: require("../../assets/icons/ladybug.png"),
  lock: require("../../assets/icons/lock.png"),
  menu: require("../../assets/icons/menu.png"),
  miu: require("../../assets/icons/miu.png"),
  more: require("../../assets/icons/more.png"),
  note: require("../../assets/icons/note.png"),
  pin: require("../../assets/icons/pin.png"),
  podcast: require("../../assets/icons/podcast.png"),
  product: require("../../assets/icons/product.png"),
  remote: require("../../assets/icons/remote.png"),
  scan: require("../../assets/icons/scan.png"),
  settings: require("../../assets/icons/settings.png"),
  shop: require("../../assets/icons/shop.png"),
  slack: require("../../assets/icons/slack.png"),
  unitedkingdom: require("../../assets/icons/unitedkingdom.png"),
  view: require("../../assets/icons/view.png"),
  x: require("../../assets/icons/x.png"),
}

const $imageStyle: ImageStyle = {
  resizeMode: "contain",
}
