export const state = {
  ddayFormats: [
    'D-28 (D-%d)',
    'D 28 (D %d)',
    'D-day 28 (D-day %d)',
    'D day 28 (D day %d)',
  ],
  dateFormats: [
    '2019.02.19 (YYYY.MM.DD)',
    '2019-02-19 (YYYY-MM-DD)',
    '19.02.19 (YY.MM.DD)',
    '19-02-19 (YY-MM-DD)',
    '190219 (YYMMDD)',
  ],
  dday: 'D-28 (D-%d)',
  date: '2019.02.19 (YYYY.MM.DD)',
}

export const mutations = {
  UPDATE_FORMAT_DDAY(state, format) {
    state.dday = format
  },
  UPDATE_FORMAT_DATE(state, format) {
    state.date = format
  },
  RESET_FORMAT(state, { dday, date }) {
    state.dday = dday
    state.date = date
  },
}
