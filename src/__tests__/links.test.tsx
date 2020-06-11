import { links } from "../links";

describe("links", () => {
  it("have valid bodies", () => {
    const createDecodedLinkArray = () =>
      links.map(
        (link) => decodeURIComponent(link.getBody("", ""))
      );
    expect(createDecodedLinkArray).not.toThrowError();
  });

  it("have valid subjects", () => {
    const createDecodedLinkArray = () =>
      links.map((link) => decodeURIComponent(link.subject));
    expect(createDecodedLinkArray).not.toThrowError();
  });
});
