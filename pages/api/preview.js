import { Client, linkResolver } from '../../prismic/prismic-configuration'

const Preview = async (req, res) => {

  const { token: ref, documentId } = req.query;

  const redirectUrl = await Client(req)
    .getPreviewResolver(ref, documentId)
    .resolve(linkResolver, "/");

  if (!redirectUrl) {
    return res.status(401).json({ message: "Invalid token" });
  }

  res.setPreviewData({ ref });
  res.writeHead(302, { Location: `${redirectUrl}`  })
  res.end();
};

export default Preview;