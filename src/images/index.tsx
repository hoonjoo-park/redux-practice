const ImageKeys = {
  homeIcon: 'homeIcon',
  resultIcon: 'resultIcon',
  profileIcon: 'profileIcon',
};

type ImageKeys = (typeof ImageKeys)[keyof typeof ImageKeys];

type StaticImages = Record<ImageKeys, any>;

const Images: StaticImages = {
  homeIcon: require('./home.png'),
  resultIcon: require('./result.png'),
  profileIcon: require('./user.png'),
};

export default Images;
