import { ResponsiveContainer } from '$/shared/ui'
import { cn } from '$/shared/utils'
import { Advantages, type BannerProps, ButtonWithHandlers, widgetIds } from '$/widgets'

export const BannerWithSeparateImg = ({
  headTitle,
  subtitle,
  buttonsConfig,
  advantages,
  classes,
  imgMobile,
  imgDesktop,
  imgAlt,
  color,
  renderImage
}: Omit<BannerProps, 'bannerVariant'>) => {
  const { primary, secondary } = buttonsConfig || {}

  //TODO: взять пере используемую фн renderImage и переименовать пропс renderImage в renderImageCb
  const image = (args: React.ComponentProps<'img'>) => {
    return renderImage ? renderImage(args) : <img {...args} />
  }

  return (
    <section
      id={widgetIds.banner}
      //TODO: CHANGE COLOR TO BG-COLOR NE PONANYTNO PO SMYSLY
      style={{ backgroundColor: color ?? '#d9edff' }}
      data-test-id={widgetIds.banner}
      className={cn('', classes?.root)}
    >
      <ResponsiveContainer className={cn('relative desktop:h-[456px]', classes?.container)}>
        <div className={cn('flex flex-col desktop:flex-row desktop:justify-between', classes?.wrapper)}>
          <div className='flex flex-col desktop:gap-10 desktop:pt-20'>
            <div className={cn('flex flex-col gap-4 pt-6 desktop:pt-0', classes?.textBlock)}>
              <div
                dangerouslySetInnerHTML={{ __html: headTitle }}
                className={cn('mob-headline-bold-m text-color-dark desktop:desk-headline-bold-l', classes?.title)}
              />
              <div
                dangerouslySetInnerHTML={{ __html: subtitle }}
                className={cn('desk-body-regular-l text-color-dark', classes?.subtitle)}
              />
            </div>

            <div
              className={cn(
                'grid-buttons-apply absolute bottom-6 left-1/2 z-10 flex w-full -translate-x-1/2 flex-col justify-self-center px-4 desktop:static desktop:left-auto desktop:max-w-full desktop:translate-x-0 desktop:flex-row desktop:justify-normal desktop:px-0',
                { 'flex items-center gap-4': secondary?.enabled },
                classes?.group
              )}
            >
              {primary.enabled && (
                <ButtonWithHandlers
                  className={cn('w-full desktop:max-w-[216px]', classes?.primary)}
                  size='lg'
                  intent='primary'
                  {...primary.buttonContent}
                />
              )}
              {secondary?.enabled && (
                <ButtonWithHandlers
                  intent='secondary'
                  className={cn('w-full desktop:max-w-[216px]', classes?.secondary)}
                  {...primary.buttonContent}
                />
              )}
            </div>
          </div>

          <div
            className={cn(
              'relative flex h-[356px] justify-center desktop:hidden desktop:h-[456px] desktop:w-[550px]',
              classes?.imageContainer
            )}
          >
            {image({ src: imgMobile.src, alt: imgAlt, className: cn('h-full object-contain') })}
          </div>

          <div
            className={cn(
              'relative flex h-[356px] justify-center mobile:hidden desktop:h-[456px] desktop:w-[550px]',
              classes?.imageContainer
            )}
          >
            {image({
              src: imgDesktop.src,
              alt: imgAlt,
              className: cn('h-full object-contain')
            })}
          </div>
        </div>

        {advantages?.enabled && (
          <div
            className={cn(
              'items-center justify-center rounded-md p-4 pb-8 mobile:hidden desktop:absolute desktop:bottom-[-50px] desktop:right-1/2 desktop:flex desktop:translate-x-1/2 desktop:p-0',
              classes?.advantageContainer
            )}
          >
            {/*//TODO: Можно вынести проверку дублируется и убрать advantageContainer внутрь компонента Advantages?*/}
            {advantages?.details && advantages?.details?.items.length > 0 && <Advantages {...advantages} />}
          </div>
        )}
      </ResponsiveContainer>
      {advantages?.enabled && (
        <div
          className={cn(
            'flex items-center justify-center bg-color-white px-4 pb-8 pt-4 desktop:absolute desktop:bottom-[-50px] desktop:right-1/2 desktop:hidden desktop:translate-x-1/2 desktop:p-0',
            classes?.advantageContainer
          )}
        >
          {advantages?.details && advantages?.details?.items.length > 0 && <Advantages {...advantages} />}
        </div>
      )}
    </section>
  )
}
