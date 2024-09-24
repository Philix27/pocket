export class KycService {
  async verifyBvn(props: { bvn: string; dob: string; firstName: string; lastName: string }): Promise<boolean> {
    //   todo:smile id verification
    return true;
  }

  async verifyNin(props: { nin: string; dob: string; firstName: string; lastName: string }): Promise<boolean> {
    //   todo:smile id verification
    return true;
  }
}
