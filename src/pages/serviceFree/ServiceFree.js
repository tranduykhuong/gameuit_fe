import React, { useEffect, useState } from "react";
import "./serviceFree.css";
import { Link } from "react-router-dom";
import ButtonCT from "./../../components/buttonCT/ButtonCT";
import Tag from "./Tag/Tag";
import { tagNames, tagsRoom, tagsTree } from "./tagsData";
import { axiosClient } from "../../api/axios";

const ServiceFree = () => {
  const [isLoading, setLoading] = useState(false);
  const [type, setType] = useState("tree");
  const [dataTags, setDataTags] = useState(tagsTree);
  const [selectedTags, setSelectedTags] = useState([]);
  const [textSearch, setTextSearch] = useState("");

  const [dataSearch, setDataSearch] = useState(tagsTree);
  const [response, setResponse] = useState([]);

  const handleSelect = (id) => {
    setSelectedTags([...selectedTags, id]);
    const newDataTags = dataTags;
    newDataTags[id.substring(1)][id[0]].status = true;
    setDataTags(newDataTags);
  };

  const handleUnselected = (id) => {
    dataTags[id.substring(1)][id[0]].status = false;
    const newSelected = selectedTags.filter((item) => item !== id);
    setSelectedTags(newSelected);
  };

  const handleSearch = (e) => {
    setTextSearch(e.target.value);

    const data = {};
    for (const x in dataTags) {
      const tmp = []
      for (let i = 0; i < dataTags[x].length; i++) {
        if (
          dataTags[x][i].des
            .toLowerCase()
            .includes(e.target.value.toLowerCase())
        ) {
          tmp.push(dataTags[x][i]);
        }
      }
      if (tmp.length) {
        data[x] = tmp;
      }
    }

    setDataSearch(data);
  };

  const handleSubmit = () => {
    setTextSearch('')
    let url = "/trees/?page=1";
    if (type === 'room')
     url = "/rooms-match/?page=1";
     
    selectedTags.map((item) => {
      url += "&" + item.substring(1) + "=" + item[0];
    });

    setLoading(true);
    axiosClient
      .get(url)
      .then((res) => {
        console.log(res);
        setResponse(res.content);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
    console.log(url);
  };

  useEffect(() => {
    if (type === "tree") {
      setDataTags(tagsTree);
      setDataSearch(tagsTree);
    }
    else {
      setDataTags(tagsRoom);
      setDataSearch(tagsRoom);
    }

    setSelectedTags([]);
    setTextSearch("");
    setResponse([]);

  }, [type]);

  return (
    <div className="serviceFree">
      <div className="serviceFree__heading">
        <h3 className="text-3xl text-white font-semibold">
          TRANG TRÍ NHÀ NGAY
        </h3>
        <div>
          <Link to="/home" className="text-lg text-slate-200 pr-2">
            TRANG CHỦ
          </Link>
          <Link
            to="/services/premium"
            className="text-lg text-amber-500 pl-2"
            style={{ borderLeft: "1px solid #ccc", color: "#FFDE68" }}
          >
            DỊCH VỤ TƯ VẤN
          </Link>
        </div>
      </div>

      <div className="serviceFree__content">
        <ul className="serviceFree__navbar">
          <li
            className={`${type === "tree" ? "navbar-active" : ""}`}
            onClick={() => setType("tree")}
          >
            Chọn cây
          </li>
          <li
            className={`${type === "room" ? "navbar-active" : ""}`}
            onClick={() => setType("room")}
          >
            Bố trí phòng
          </li>
        </ul>

        <div className="serviceFree__workspace">
          <div className="workspace__item">
            <div>
              {type === "tree" ? (
                <h5>Nhập mong muốn của bạn về cây</h5>
              ) : (
                <h5>Nhập mong muốn của bạn về phòng</h5>
              )}
              <div className="w-full relative">
                <input type="text" value={textSearch} onChange={handleSearch} />
                {textSearch !== "" && (
                  <ul className="workspace__item-dropdown">
                    {dataSearch.map((item) => {
                      if (!item.item.status) {
                        return (
                          <li
                            key={item.code}
                            onClick={() => handleSelect(item.code)}
                          >
                            {item.item.des}
                          </li>
                        );
                      }
                      return ''
                    })}
                  </ul>
                )}
              </div>
            </div>

            <div className="tagsBox">
              {Object.keys(dataSearch).map((k, idx) => (
                <div key={+idx}>
                <h6>{tagNames[k]}</h6>
                {dataSearch[k].map((item, idx) => {
                  if (!item.status) {
                    return (
                      <span key={`${idx}${k}`}>
                        <Tag
                          content={item.des}
                          onClick={(e) =>
                            handleSelect(`${idx}${k}`)
                          }
                        />
                      </span>
                    );
                  }
                  return "";
                })}
              </div>
              ))}
            </div>

            <ButtonCT
              onClick={handleSubmit}
              className="workspace__item-btn"
              primary
              large
              loading={isLoading}
            >
              Xem gợi ý ngay
            </ButtonCT>
          </div>
          <div className="workspace__item">
            <h5>Tags đã chọn</h5>
            <div className="tags-list">
              {selectedTags.map((item, idx) => (
                <span key={+idx}>
                  <Tag
                    content={dataTags[item.substring(1)][item[0]].des}
                    icon
                    onClick={() => handleUnselected(item)}
                  />
                </span>
              ))}
            </div>
          </div>
        </div>

        {response.length !== 0 ?
          <div className="serviceFree__result">
            <h6>Kết quả gợi ý</h6>
            <div className="result__list">
              {response.map((item, idx) => (
                <div className="result__item" key={+idx}>
                  <div className="result__item-img">
                    <img className="m-auto" src={item.image} alt="" />
                  </div>
                  <div className="result__item-description">
                    <h3>{item?.name}</h3>
                    {type === 'tree'
                      ? <ul className="description__list">
                      <li className="description__list-item">
                        <span>Mô tả: </span>
                        <p>{item?.description}</p>
                      </li>
                      <li className="description__list-item">
                        <span>Loại lá: </span>
                        <p>{item?.leafType ? dataTags['leafType'][+item?.leafType]?.des : ''}</p>
                      </li>
                      <li className="description__list-item">
                        <span>Nơi bán: </span>
                        <p>{item?.sellLocation}</p>
                      </li>
                    </ul>
                    : <ul className="description__list">
                    <li className="description__list-item">
                      <span>Loại phòng: </span>
                      <p>{item?.roomType ? dataTags['roomType'][item?.roomType]?.des : ''}</p>
                    </li>
                    <li className="description__list-item">
                      <span>Kích thước phòng: </span>
                      <p>{item?.roomSizeType ? dataTags['roomSizeType'][item?.roomSizeType]?.des : ''}</p>
                    </li>
                    <li className="description__list-item">
                      <span>Cây phù hợp: </span>
                      <p>{item.matchingTrees ? item.matchingTrees.map(e => e.name) : ''}</p>
                    </li>
                  </ul>
                  }
                </div>
              </div>
            ))}
            </div>
          </div> 
          : ''
        }
      </div>
    </div>
  );
};

export default ServiceFree;
