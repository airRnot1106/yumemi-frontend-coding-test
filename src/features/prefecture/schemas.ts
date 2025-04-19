import { z } from 'zod';

export const prefectureCodeSchema = z.union([
  z.literal(1),
  z.literal(2),
  z.literal(3),
  z.literal(4),
  z.literal(5),
  z.literal(6),
  z.literal(7),
  z.literal(8),
  z.literal(9),
  z.literal(10),
  z.literal(11),
  z.literal(12),
  z.literal(13),
  z.literal(14),
  z.literal(15),
  z.literal(16),
  z.literal(17),
  z.literal(18),
  z.literal(19),
  z.literal(20),
  z.literal(21),
  z.literal(22),
  z.literal(23),
  z.literal(24),
  z.literal(25),
  z.literal(26),
  z.literal(27),
  z.literal(28),
  z.literal(29),
  z.literal(30),
  z.literal(31),
  z.literal(32),
  z.literal(33),
  z.literal(34),
  z.literal(35),
  z.literal(36),
  z.literal(37),
  z.literal(38),
  z.literal(39),
  z.literal(40),
  z.literal(41),
  z.literal(42),
  z.literal(43),
  z.literal(44),
  z.literal(45),
  z.literal(46),
  z.literal(47),
]);

export type PrefectureCode = z.infer<typeof prefectureCodeSchema>;

export const prefectureNameSchema = z.union([
  z.literal('北海道'),
  z.literal('青森県'),
  z.literal('岩手県'),
  z.literal('宮城県'),
  z.literal('秋田県'),
  z.literal('山形県'),
  z.literal('福島県'),
  z.literal('茨城県'),
  z.literal('栃木県'),
  z.literal('群馬県'),
  z.literal('埼玉県'),
  z.literal('千葉県'),
  z.literal('東京都'),
  z.literal('神奈川県'),
  z.literal('新潟県'),
  z.literal('富山県'),
  z.literal('石川県'),
  z.literal('福井県'),
  z.literal('山梨県'),
  z.literal('長野県'),
  z.literal('岐阜県'),
  z.literal('静岡県'),
  z.literal('愛知県'),
  z.literal('三重県'),
  z.literal('滋賀県'),
  z.literal('京都府'),
  z.literal('大阪府'),
  z.literal('兵庫県'),
  z.literal('奈良県'),
  z.literal('和歌山県'),
  z.literal('鳥取県'),
  z.literal('島根県'),
  z.literal('岡山県'),
  z.literal('広島県'),
  z.literal('山口県'),
  z.literal('徳島県'),
  z.literal('香川県'),
  z.literal('愛媛県'),
  z.literal('高知県'),
  z.literal('福岡県'),
  z.literal('佐賀県'),
  z.literal('長崎県'),
  z.literal('熊本県'),
  z.literal('大分県'),
  z.literal('宮崎県'),
  z.literal('鹿児島県'),
  z.literal('沖縄県'),
]);

export type PrefectureName = z.infer<typeof prefectureNameSchema>;

export const getPrefecturesResponseSchema = z.object({
  message: z.string().nullable(),
  result: z.array(
    z.object({
      prefCode: prefectureCodeSchema,
      prefName: prefectureNameSchema,
    }),
  ),
});

export type GetPrefecturesResponse = z.infer<
  typeof getPrefecturesResponseSchema
>;
