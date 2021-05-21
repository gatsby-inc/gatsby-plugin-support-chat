exports.pluginOptionsSchema = ({ Joi }) => {
  return Joi.object({
    title: Joi.string().description("Text shown in dialog header"),
  })
}
