import { useForm } from '@tanstack/react-form';
import { ComponentProps, FC } from 'react';
import { css, cx } from 'styled-system/css';
import { Button } from '@/components/atoms/button';
import { Checkbox } from '@/components/atoms/checkbox';
import { Prefecture } from '@/features/prefecture/schemas';

type PrefCode = Prefecture['prefCode'];

export type PrefectureFormPresentationalProps = Omit<
  ComponentProps<'form'>,
  'onSubmit'
> & {
  defaultValues?: PrefCode[];
  prefectures: Prefecture[];
  onSubmit: (prefCodes: PrefCode[]) => void;
  onReset: () => void;
};

export const PrefectureFormPresentational: FC<
  PrefectureFormPresentationalProps
> = ({
  defaultValues = [],
  prefectures,
  onSubmit,
  onReset,
  className,
  ...rest
}) => {
  const form = useForm({
    defaultValues: {
      prefCodes: defaultValues as PrefCode[],
    },
    onSubmit: ({ value }) => {
      onSubmit(value.prefCodes);
    },
  });

  return (
    <form
      className={cx(
        className,
        css({
          display: 'grid',
          gridAutoFlow: 'row',
          rowGap: '2rem',
        }),
      )}
      {...rest}
    >
      <form.Field
        children={(field) => (
          <ul
            className={css({
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(8rem, 1fr))',
              rowGap: '0.5rem',
            })}
          >
            {prefectures.map(({ prefCode, prefName }) => (
              <li key={prefCode}>
                <Checkbox
                  checked={field.state.value.includes(prefCode)}
                  name={field.name}
                  onBlur={field.handleBlur}
                  onChange={(e) => {
                    const newValue = e.target.checked
                      ? [...field.state.value, prefCode]
                      : field.state.value.filter((v) => v !== prefCode);
                    newValue.sort((a, b) => a - b);
                    field.handleChange(newValue);
                  }}
                  value={prefCode}
                >
                  {prefName}
                </Checkbox>
              </li>
            ))}
          </ul>
        )}
        listeners={{
          onChange: ({ value: prefCodes }) => {
            if (prefCodes.length === 0) {
              onReset();
              return;
            }
            onSubmit(prefCodes);
          },
        }}
        name="prefCodes"
      />
      <Button
        className={css({
          justifySelf: 'center',
          width: 'fit-content',
        })}
        onClick={(e) => {
          e.preventDefault();
          form.reset();
          onReset();
        }}
        type="reset"
        variant="normal"
      >
        リセット
      </Button>
    </form>
  );
};
