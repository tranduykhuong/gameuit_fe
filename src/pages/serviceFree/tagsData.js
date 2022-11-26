const tagsTree = {
  'treeType': [{
    'status': false,
    'des': 'cây phong thủy',
  }, {
    'status': false,
    'des': 'cây ăn quả',
  }, {
    'status': false,
    'des': 'bonsai',
  }],
  'careLevel': [{
    'status': false,
    'des': 'ít chăm sóc',
  }, {
    'status': false,
    'des': 'chăm sóc trung bình',
  }, {
    'status': false,
    'des': 'chăm sóc nhiều',
  }],
  'leafType': [{
    'status': false,
    'des': 'không lá',
  }, {
    'status': false,
    'des': 'ít lá',
  }, {
    'status': false,
    'des': 'nhiều lá',
  }],
  'habitat': [{
    'status': false,
    'des': 'dưới nước',
  }, {
    'status': false,
    'des': 'trên cạn',
  }, {
    'status': false,
    'des': 'trên cạn/dưới nước',
  }],
  'irrigationMode': [{
    'status': false,
    'des': 'chế độ ít nước',
  }, {
    'status': false,
    'des': 'chế độ nước vừa',
  }, {
    'status': false,
    'des': 'chế độ nước vừa',
  }],
  'direction': [{
    'status': false,
    'des': 'hướng đông',
  }, {
    'status': false,
    'des': 'hướng tây',
  }, {
    'status': false,
    'des': 'hướng nam',
  }, {
    'status': false,
    'des': 'hướng bắc',
  }],
  'hasFlower': [{
    'status': false,
    'des': 'có hoa',
  }, {
    'status': false,
    'des': 'không hoa',
  }],
  'sunLevel': [{
    'status': false,
    'des': 'không cần nắng',
  }, {
    'status': false,
    'des': 'cần ít nắng',
  }, {
    'status': false,
    'des': 'cần nhiều nắng',
  }],
  'treeSize': [{
    'status': false,
    'des': 'kích thước nhỏ',
  }, {
    'status': false,
    'des': 'kích thước trung bình',
  }, {
    'status': false,
    'des': 'kích thước lớn',
  }],
  'lifeTime': [{
    'status': false,
    'des': 'vòng đời ngắn',
  }, {
    'status': false,
    'des': 'vòng đời trung bình',
  }, {
    'status': false,
    'des': 'vòng đời lâu',
  }],
  'temperature': [{
    'status': false,
    'des': 'nhiệt độ lạnh',
  }, {
    'status': false,
    'des': 'nhiệt độ vừa',
  }, {
    'status': false,
    'des': 'nhiệt độ nóng',
  }],
  'humidity': [{
    'status': false,
    'des': 'độ ẩm thấp',
  }, {
    'status': false,
    'des': 'độ ẩm trung bình',
  }, {
    'status': false,
    'des': 'độ ẩm cao',
  }]
}

const tagNames = {
  'treeType': "Loại cây",
  'careLevel': "Chế độ chăm sóc",
  'leafType': "Loại lá",
  'habitat': "Môi trường sống",
  'irrigationMode': "Chế độ tưới nước",
  'direction': "Hướng bố trí",
  'hasFlower': "Cây có hoa",
  'sunLevel': "Mức độ phơi nắng",
  'treeSize': "Kích thước cây",
  'lifeTime': "Thời gian sống",
  'temperature': "Nhiệt độ phù hợp",
  'humidity': "Độ ẩm phù hợp",
  'roomType': "Loại phòng",
  'roomSizeType': "Kích thước phòng",
  'roomVentilationLevel': "Độ thoáng của phòng",
}

const tagsRoom = {
  'roomType': [{
    'status': false,
    'des': 'trong nhà',
  }, {
    'status': false,
    'des': 'ngoài trời',
  }],
  'roomSizeType': [{
    'status': false,
    'des': 'phòng nhỏ',
  }, {
    'status': false,
    'des': 'phòng vừa',
  }, {
    'status': false,
    'des': 'phòng lớn',
  }],
  'direction': [{
    'status': false,
    'des': 'hướng đông',
  }, {
    'status': false,
    'des': 'hướng tây',
  }, {
    'status': false,
    'des': 'hướng nam',
  }, {
    'status': false,
    'des': 'hướng bắc',
  }],
  'roomVentilationLevel': [{
    'status': false,
    'des': 'thông thoáng ít',
  }, {
    'status': false,
    'des': 'thông thoáng vừa',
  }, {
    'status': false,
    'des': 'thông thoáng nhiều',
  }],
  'temperature': [{
    'status': false,
    'des': 'nhiệt độ thấp',
  }, {
    'status': false,
    'des': 'nhiệt độ vừa',
  }, {
    'status': false,
    'des': 'nhiệt độ cao',
  }],
  'humidity': [{
    'status': false,
    'des': 'ít',
  }, {
    'status': false,
    'des': 'độ ẩm vừa',
  }, {
    'status': false,
    'des': 'độ ẩm cao',
  }],
}


export {
  tagsTree,
  tagsRoom,
  tagNames
};