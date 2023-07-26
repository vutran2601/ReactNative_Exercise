import React, { FC } from "react"
import { Text } from "../components"
import { DemoTabScreenProps } from "../navigators/DemoNavigator"
import { View } from "react-native"
import { Icon } from "../components"

const MenuItem = (props: any) => {
    return (
        <View
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                flex: 1,
                flexBasis: '25%',
                gap: 3
            }}
        >
            <View
                style={{
                    borderWidth: 0.3,
                    borderColor: 'gray',
                    paddingTop: 10,
                    width: 60,
                    height: 60,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 15,
                    backgroundColor: props.mark ? '#eede96' : 'white'
                }}
            >
                <Icon
                    icon={props.icon}
                    color={['circlecolor', 'gear'].includes(props.icon) ? '' : '#5A3FC1'}
                    size={40}
                    style={{
                        marginBottom: 10
                    }}
                />
            </View>
            <Text
                style={{
                    fontSize: 10,
                    fontFamily: 'Arial',
                    textAlign: 'center',
                    width: '80%',
                    lineHeight: 12
                }}
            >
                {props.label}
            </Text>
        </View>
    )
}

const MainMenu = () => {
    const menuItemList = [
        { label: 'Trang chủ', icon: 'home' },
        { label: 'Tính toán sơn', icon: 'calculator' },
        { label: 'Danh mục màu', icon: 'remote' },
        { label: 'Phối màu 3D', icon: 'axis3d', mark: true },
        { label: 'Tìm nhanh màu yêu thích', icon: 'circlecolor' },
        { label: 'Kiểm tra mã SP', icon: 'note', mark: true },
        { label: 'Mua hàng online', icon: 'cart' },
        { label: 'Về JotonPain', icon: 'info' },
        { label: 'Tìm đại lý', icon: 'shop', mark: true },
        { label: 'Dịch vụ', icon: 'settings' },
        { label: 'Thẻ thành viên', icon: 'card' },
        { label: 'Tài khoản', icon: 'account'  },
        { label: 'Đổi quà', icon: 'gift', mark: true },
        { label: 'Tin khuyến mãi', icon: 'gear' },
        { label: 'Quét mã tích điểm', icon: 'scan', mark: true },
        { label: 'Sản phẩm', icon: 'product' },
    ]

    return (
        <View
            style={{
                height: '100%',
                paddingTop: 20,
                paddingBottom: 20,
                paddingLeft: 10,
                paddingRight: 10,
                display: 'flex',
                flexDirection: 'column',
                gap: 20,
            }}
        >
            <Text
                style={{
                    color: '#2B2768',
                    fontSize: 20,
                    fontFamily: 'Arial'
                }}
            >
                Menu
            </Text>

            <View
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    rowGap: 10
                }}
            >
                {
                    menuItemList.map((menuItem, index) => {
                        return (
                            <MenuItem 
                                key={index} 
                                label={menuItem.label} 
                                icon={menuItem.icon} 
                                mark={menuItem.mark}
                            />
                        )
                    })
                }
            </View>

            <View
                style={{
                    backgroundColor: '#5A3FC1',
                    padding: 10,
                    right: 10,
                    bottom: 10,
                    borderRadius: 50,
                    position: 'absolute'
                }}
            >
                <Icon
                    icon="call"
                    color= 'white'
                    size={25}
                />
            </View>
        </View>
    )
}

export const MenuScreen: FC<DemoTabScreenProps<"Menu">> = function MenuScreen(
  _props,
) {
    return (
        <MainMenu/>
    )
}
