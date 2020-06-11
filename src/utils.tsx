import { LinkInfo } from "./links";

export const generateLink = (
  linkInfo: LinkInfo,
  name: string,
  location: string
) => {
  let base = `mailto:${linkInfo.to}?`;
  if (linkInfo.cc) {
    const cc = linkInfo.cc.reduce((acc, email, i, arr) => {
      return i === arr.length - 1 ? `${acc}${email}&` : `${acc}${email}, `;
    }, "cc=");
    base += cc;
  }
  if (linkInfo.bcc) {
    const bcc = linkInfo.bcc.reduce((acc, email, i, arr) => {
      return i === arr.length - 1 ? `${acc}${email}&` : `${acc}${email}, `;
    }, "bcc=");
    base += bcc;
  }
  const body = linkInfo.getBody(name, location);
  base += `subject=${linkInfo.subject}&body=${body}`;
  return base;
};

export const generateCopyableEmail = (
  linkInfo: LinkInfo,
  name: string,
  location: string,
  successCallback: () => void,
  errorCallback: () => void
) => {
  const email = `
To: ${linkInfo.to},

CC: ${
    linkInfo.cc &&
    linkInfo.cc.reduce((acc, email, i, arr) => {
      return i === arr.length - 1 ? `${acc}${email}&` : `${acc}${email}, `;
    }, "")
  },

BCC: ${
    linkInfo.bcc &&
    linkInfo.bcc.reduce((acc, email, i, arr) => {
      return i === arr.length - 1 ? `${acc}${email}&` : `${acc}${email}, `;
    }, "")
  },

Subject: ${decodeURIComponent(linkInfo.subject)},

Body: ${decodeURIComponent(linkInfo.getBody(name, location))}
  `;
  navigator.clipboard.writeText(email).then(successCallback, errorCallback);
};
