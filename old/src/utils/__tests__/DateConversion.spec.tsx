import DateConversion from '../DateConversion';

describe('Date Conversion', () => {
  it('should convert date to string', () => {
    const mockPostData = {
      date: '2020-01-01',
    };

    const dateString = DateConversion({ dateString: mockPostData.date });

    expect(dateString.props.children).toBe('January 1, 2020');
  });
});
