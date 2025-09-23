// IPFS URL映射工具
// 将本地资源路径映射到IPFS链接

interface IPFSMapping {
  [key: string]: string
}

// IPFS映射表
const ipfsMapping: IPFSMapping = {
  // 视频文件
  '钢结构网架-操作演示.mp4': 'https://bafybeigrtmi6cte4vp5x54d26hu2i5l5eekgnmjnan6qehejpd23dlrghm.ipfs.dweb.link?filename=%E9%92%A2%E7%BB%93%E6%9E%84%E7%BD%91%E6%9E%B6-%E6%93%8D%E4%BD%9C%E6%BC%94%E7%A4%BA.mp4',
  '净高分析(填充).mp4': 'https://bafybeiae64jmqrxsnbsjkawwbs6ckip43a64m26y5s5ntklkcvccg2vg2q.ipfs.dweb.link?filename=%E5%87%80%E9%AB%98%E5%88%86%E6%9E%90(%E5%A1%AB%E5%85%85).mp4',
  'demo2.mp4': 'https://bafybeiburp7jiqmav42cw5htck5w7hktyfawvbdk4bikyxc5cd4cnc7jly.ipfs.dweb.link?filename=demo2.mp4',
  'demo3.mp4': 'https://bafybeifl7otv5xwhyo3i5d6pskjbmz5nuj5rjdrcyeqlbepygurpxecmyu.ipfs.dweb.link?filename=demo3.mp4',
  
  // 图片文件
  'by.png': 'https://bafybeigm3ufpjqqu47ltgx5l3vpv5mftzb2ugceyzlpk5vktuiigkhxeza.ipfs.dweb.link?filename=by.png',
  'by2.png': 'https://bafybeigkmnnt4zdnyxez4irxdh3rqgkph5tspgqghnk4imxnrtcw7zanyu.ipfs.dweb.link?filename=by2.png',
  'by3.png': 'https://bafybeidyhhohba4mbhvc4yz2zyh3wtdmal7rcdn52suyh23qg4u6ic5ji4.ipfs.dweb.link?filename=by3.png',
  'db1.png': 'https://bafybeia7gnxrulj7m6mukslr75b6zhwmwqwybkw3lkkpup3qhwbv2uzu3m.ipfs.dweb.link?filename=db1.png',
  'db2.png': 'https://bafybeihvhh7oxfolsuehitwy25djkr7eljucglhya65hhwzrndqt4bd5xi.ipfs.dweb.link?filename=db2.png',
  'dnpt.png': 'https://bafybeifz4r4d3mdveq6zh4geohrczfbpgyqyytlrwdh65ei2fbb6opj5cm.ipfs.dweb.link?filename=dnpt.png',
  'dnpt2.png': 'https://bafybeias4iger7mcbjblgxkdp63wb3i6h6iewwvacvdbn2h7ed4vnp73zi.ipfs.dweb.link?filename=dnpt2.png',
  'ol.png': 'https://bafybeia7hexq5xr5x7uh6pbva33n2l36sfwr4ubznxmzbwipt3nllvs2tm.ipfs.dweb.link?filename=ol.png',
  'rvt.png': 'https://bafybeie6njwn2zqilg73jzvgfbzekhhktubw55uoukrzwau5rnjjqs57ou.ipfs.dweb.link?filename=rvt.png',
  'rvt2.png': 'https://bafybeifus37mzpwa5papjv7oacpsa7p4smffvrc7cjo46carghez6mmvce.ipfs.dweb.link?filename=rvt2.png',
  'scly.png': 'https://bafybeibi4qn7miqbl2vlbcnyd33elxi43c2yf4vtrjvbyai33j7ebwghu4.ipfs.dweb.link?filename=scly.png',
  'scly2.png': 'https://bafybeifgxmmizvybd7zu3iqudztnhdnpc4ub3e3pxp4qd365qy7tfbil7e.ipfs.dweb.link?filename=scly2.png',
  'zlpt.png': 'https://bafybeid57mlkce4rh6iudjma2aqedobw7bzjfeqrqxf6tosl7yocah2wti.ipfs.dweb.link?filename=zlpt.png',
  'zs1.png': 'https://bafybeiai6rgkrkbdnfwkm4omyncvyit6dzcpub35xjcye7mpayrutqec44.ipfs.dweb.link?filename=zs1.png',
  'zs2.png': 'https://bafybeignyztvv22usw2uauass23zffxmlcrtoz3463qilzrfs26yhskuci.ipfs.dweb.link?filename=zs2.png',
  'zs3.png': 'https://bafybeigcwryqzhdr7nsecewy647qeovxqsykomycnzmeb4onctsrfmt6ma.ipfs.dweb.link?filename=zs3.png',
  'zt1.png': 'https://bafybeifseundu5qmbyiq3fkz745pimwl45py6ou257ia7wdaphmbxi7nrq.ipfs.dweb.link?filename=zt1.png',
  'zt2.png': 'https://bafybeieo5jbkel4cua7ol5dz7n5daakh7h72itc4orixqgdbyysnplbfy4.ipfs.dweb.link?filename=zt2.png',
}

/**
 * 根据文件名获取IPFS URL
 * @param filename 文件名(包含扩展名)
 * @returns IPFS URL或原始路径(如果没有找到映射)
 */
export function getIPFSUrl(filename: string): string {
  return ipfsMapping[filename] || filename
}

/**
 * 从完整路径中提取文件名并获取IPFS URL
 * @param path 完整的文件路径，如 '@/assets/img/by.png'
 * @returns IPFS URL或原始路径
 */
export function getIPFSUrlFromPath(path: string): string {
  // 从路径中提取文件名
  const filename = path.split('/').pop() || path
  return getIPFSUrl(filename)
}

/**
 * 替换Vite import.meta.url生成的URL为IPFS URL
 * @param viteUrl Vite生成的URL
 * @returns IPFS URL或原始URL
 */
export function replaceWithIPFS(viteUrl: string): string {
  // 从URL中提取文件名
  const url = new URL(viteUrl, window.location.origin)
  const filename = url.pathname.split('/').pop() || ''
  
  // 去除URL编码
  const decodedFilename = decodeURIComponent(filename)
  
  return getIPFSUrl(decodedFilename) || viteUrl
}
