import {Video, ResizeMode} from 'expo-av';
import {Image, Text, View} from 'react-native';
import {MediaItemWithOwner} from '../types/DBTypes';

const Single = ({route}: any) => {
  const item: MediaItemWithOwner = route.params;
  const [fileType, fileFormat] = item.media_type.split('&#x2F;');
  return (
    <View>
      <Text>{item.title}</Text>
      {fileType === 'image' ? (
        <Image
          style={{height: 300}}
          source={{uri: 'http:' + item.filename}}
        ></Image>
      ) : (
        <Video
          style={{height: 300}}
          source={{uri: 'http:' + item.filename}}
          useNativeControls
          resizeMode={ResizeMode.CONTAIN}
        />
      )}

      <Text>{new Date(item.created_at).toLocaleString('fi-FI')}</Text>
      <Text>Owner: {item.username}</Text>
      <Text>
        Mediatype: {fileType} / {fileFormat}
      </Text>
      <Text>File size: {Math.round(item.filesize / 1024)} kB</Text>
    </View>
  );
};

export default Single;
