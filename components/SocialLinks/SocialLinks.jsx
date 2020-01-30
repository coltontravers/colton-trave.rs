const SocialLinks = ({ socials }) =>
  socials.map(({ name, link }) => {
    return (
      <div>
        This is a social: {name} {link}
      </div>
    );
  });

export default SocialLinks;
